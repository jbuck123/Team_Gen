const Employee = require("./Employee");

class Manager {
    constructor(office_number) {
        this.officeNumber = office_number;
    }
    getRole() {
        return 'manager';
    }
    printManager() {
        
    }
}


module.exports = Manager;