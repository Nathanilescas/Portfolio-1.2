import MessageStorage from "./messageStorage";
import MessageData from "./messageData";

export default class MessageManager {
    messageStorage: MessageStorage[];
    _saveSystem: SavingSystem;
    _retrieveSystem: RetrieveSystem;

    constructor() {
        this.messageStorage = new Array<MessageStorage>();
        this._saveSystem = new SavingSystem(this.messageStorage);
        this._retrieveSystem = new RetrieveSystem(this.messageStorage);
    }

    storeMessage(messageObj:MessageData, roomNumber:string):boolean {
        if ( messageObj === null ) {return false}

        if (!(messageObj instanceof MessageData)) {return false}

        this._saveSystem.save(messageObj, roomNumber);

        return true
    }
    retrieveMessages(roomNumber:string):MessageData[] {
        return this._retrieveSystem.retrieveStorage(roomNumber);
    }
}



class Iterator {
    array: Array<MessageStorage>;

    constructor(arrayStorage: Array<MessageStorage>) {
        this.array = arrayStorage;
    }

    findStorageIndex(storageId: string):number {

        for (let i = 0; i < this.array.length; i++) {
           const id =  this.array[i].getStorageId()

           if (id === storageId) {return i}
        }
        return -1;
    }
}

class SavingSystem extends Iterator {
    constructor(arrayStorage: Array<MessageStorage>) {
        super(arrayStorage)
    }

    save(message: MessageData, storageID: string) {
        const result = this.findStorageIndex(storageID)

        if (result < 0) {
            const newMessageStorage = new MessageStorage(storageID);
            newMessageStorage.setMessage(message);
            this.array.push(newMessageStorage);
        } else {
            this.array[result].setMessage(message);
        }
    }
}

class RetrieveSystem extends Iterator {

    constructor(arrayStorage: Array<MessageStorage>) {
        super(arrayStorage);
    }

    retrieveStorage(storageID:string):Array<MessageData> {
        const index = this.findStorageIndex(storageID);
        const result = this.array[index].getAllMessages();
        
        return result;
    }
}