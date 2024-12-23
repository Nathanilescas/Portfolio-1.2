import { UserType } from "./userType";

export default class MessageData {
    message: string;
    userTypes: UserType;

    constructor(userType: UserType) {
        this.userTypes = userType;
        this.message = "";
    }

    setMessage(message: string):void {
        this.message = message;
    }
    getMessage():string {
        return this.message;
    }
    getUserType(): UserType {
        return this.userTypes;
    }

    static messageDataParser(incomingData:string): MessageData {
        const data = JSON.parse(incomingData);

        if (data === null) { throw new Error("messageDataParser(x:sting) -- Null return ") };
        
        const userType = data.userTypes;
        const message = data.message;


        const messageDataObj = new MessageData(userType);
        messageDataObj.setMessage(message);
        return messageDataObj;
    }

}

