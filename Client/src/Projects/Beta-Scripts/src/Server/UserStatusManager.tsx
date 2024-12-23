import { ConnectionStatus } from "./ConnectionStatus";
import { UserType } from "./StoreageSystem/userType";


export class OnlineConnectionManager {
    host:Map<string, ConnectionStatus>;
    client:Map<string, ConnectionStatus>;

    constructor() {
        this.host = new Map<string, ConnectionStatus>();
        this.client = new Map<string, ConnectionStatus>();
    }

    addHost(userID:string):void {
        const hostObj = new ConnectionStatus(UserType.HOST);

        this.host.set(userID, hostObj);
    }
    addClient(userID:string):void {
        const clientObj = new ConnectionStatus(UserType.CLIENT);
        clientObj.setRoom(userID);

        this.client.set(userID, clientObj);
    }

    removeUser(userID:string):void {
        const user = this.host.has(userID);

        if (user) {
            this.host.delete(userID);
        } else {
            this.client.delete(userID)
        }
    }
} 



// Keep track of who is online **COMPLETE**

// Keep track of the rooms