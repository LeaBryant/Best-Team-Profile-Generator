class Employee {
    constructor(name, ID, email ) {
      this.name = name;
      this.ID = ID;
      this.email = email;
    }
  }

  const Employee = require("../lib/Employee");

test('Does this create a new employee object', ()=>{
    const emp =  new Employee('Name', 2, "test@email.com")
    expect(emp.name).toBe('Name')
    expect(emp.getName()).toBe('Name')
})

test('Does this track the employee name', ()=>{
    const emp =  new Employee('Name', 2, "test@email.com")
    expect(emp.name).toBe('Name')
    expect(emp.getName()).toBe('Name')
})


getName() {
  return this.name;
}

getId() {
  return this.id;
}
getEmail() {
  return this.email;
}
getRole() {
  return "Employee"
}
}

module.exports = Employee
