import { UserType } from "./StoreageSystem/userType";

export class ConnectionStatus {
    isConnected:boolean;
    room:string;
    userTypes:UserType;

    constructor(userTypes:UserType) {
        this.isConnected = false;
        this.room = "";
        this.userTypes = userTypes;
    }

    setConnectionStatus(connectionStatus: boolean):void {
        this.isConnected = connectionStatus;
    }
    setRoom(roomNumber:string):void {
        this.room = roomNumber;
    }
    
    getConnectionStatus():boolean {
        return this.isConnected;
    }
    getRoom():string {
        return this.room;
    }
}

