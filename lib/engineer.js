

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    printEngineer(){
        console.log("Engineer:" + this.name)
        console.log("ID:" + this.id)
        console.log( "Email:" + this.email)
        console.log("Github Account:" + this.github)
    }
}

module.exports = Engineer;