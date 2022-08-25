const { expect, test } = require('@jest/globals');
const Manager = require('./Manager');

test("the getRole() function should overide and return manager", () => {
    const employee =  new Manager('Claire', '12A', 'email', 'officeNumber'); 
    expect(employee.getRole()).toBe("Manager")
});

test("the getRole() function should overide and return Manager", () => {
    const employee =  new Manager('Claire', '12A', 'email', 'officeNumber'); 
    expect(employee.getRole()).toBe("Manager");
});