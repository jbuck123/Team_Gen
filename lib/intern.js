
const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
  
    getSchool() {
        return this.school;
    }
    printInter(){
        console.log("intern:" + this.name)
        console.log("Intern:" + this.id)
        console.log("Intern:" + this.email)
        console.log("Intern" + this.school)
    }
}

module.exports = Intern;