class Manager {
    constructor(office_number) {
        this.officeNumber = office_number;
    }
    getRole() {
        return 'manager';
    }
}


module.exports = Manager;