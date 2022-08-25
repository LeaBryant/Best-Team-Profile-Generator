const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, employeeID, email, gitHubUsername) { {
        super(name, employeeID, email);
       this.gitHubUsername = gitHubUsername;
    }
    }
    getRole() {
        return "Engineer";
    }
    getgitHub() {
        return this.gitHubUsername;
    }
}

module.exports = Engineer;