import MessageData from "./messageData";

export default class MessageStorage {
    storageID: string;
    messageLog: MessageData[];

    constructor(ID:string) {
        this.storageID = ID;
        this.messageLog = Array<MessageData>();
    }

    /* GETTERS */
    getStorageId():string {
        return this.storageID;
    }
    getAllMessages():MessageData[] {
        return this.messageLog;
    }
    getSingleMessage(index:number):string {
        return this.messageLog[index].getMessage();
    }

    /* SETTERS */
    setMessage(messageObj:MessageData) {
        this.messageLog.push(messageObj);
    }
}