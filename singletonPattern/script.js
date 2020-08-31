module.exports = class FancyLogger {
    constructor(){
        this.logs = []
    }
    log(message){
        this.logs.push(message)
        console.log(`Fancy: ${message}`);
    }
    printLogCount(){
        console.log(`${this.logs.length} logs`);
    }
}
