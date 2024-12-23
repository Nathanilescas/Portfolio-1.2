MESSAGE STORING SYSTEM
* The messaging system is build off of a Facade Pattern. The main class that will have the external method will be MessageManager. 
    - It will manage: 
        -- Saving the message
            --- StorageHandler will be the class that implements all the saving functionality
        -- Retrieving the message
            --- StorageRetriever will be the class that implements all the retrieval of the messages
    
    - It will have: 
        -- an array that will hold the message object
            --- MessageStorage will be the object structure that holds the message information, consist of:
                ---- StorageID: a string that will identify the specific storage 
                ---- MessageLog: the array that holds the messagesData object


    - MessageData: 
        -- message: the actual message which will be a string
        -- UserType: the enum that will represent the userType
        