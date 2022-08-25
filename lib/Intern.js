const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, employeeID, email, school) {
        super (name, employeeID, email); 
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    school() {
        return this.school;
    }
}

module.exports = Intern; 