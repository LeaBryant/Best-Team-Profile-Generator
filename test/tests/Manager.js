const Manager = require('../lib/Manager');

describe('Manager', () => {
    const manager = new Manager("Lea", "1", "lb123@gmail.com", "123");
    describe('build', () => {
        it("should have name, Id, email, and office number", () => {

            expect(manager.name).toEqual("Lea");
            expect(manager.Id).toEqual("1");
            expect(manager.email).toEqual("lb123@gmail.com");
            expect(manager.officeNumber).toEqual("123");
        });
    });

    describe('ManagerInfo', () => {
        it("Return a Manager info", () => {
            expect(manager.getRole()).toEqual("Manager");
        });
    });

});
