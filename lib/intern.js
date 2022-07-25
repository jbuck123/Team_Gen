
const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getRole(){
        return "Intern"
    }
  
    getSchool() {
        return this.school;
    }
    printIntern(){
        console.log("intern:" + this.name)
        console.log("ID:" + this.id)
        console.log("email:" + this.email)
        console.log("school:" + this.school)
    }
}

module.exports = Intern;