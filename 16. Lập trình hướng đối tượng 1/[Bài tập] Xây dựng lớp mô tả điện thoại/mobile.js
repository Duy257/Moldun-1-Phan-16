class Mobile {
    status; //trạng thái
    battery; //pin
    draft; // hộp thư nháp
    inbox; //hộp thư đến 
    sendbox; //hộp thư đi
    constructor (status, battery, draft, inbox, sendbox) {
        this.status = status;
        this.battery = battery;
        this.draft = draft;
        this.inbox = inbox;
        this.sendbox = sendbox;        
    }
    checkMobileStatus() {
        return this.status;
    }
    chargeBattery() {
        this.battery++;
    }
    textMessage(message) {
        this.draft.push(message);
    }
    sendMessage(mobile2) {
        let message = this.draft.pop();
        this.sendbox.push(message);
        mobile2.inbox.push(message);
    }
    receiveMessage(mobile2) {
        let message = this.draft.pop();
        mobile2.sendbox.push(message);
        this.inbox.push(message);
    }

}