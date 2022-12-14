const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const engineer = new Engineer("Susan", "15", "susan@gmail.com", "susanm9");
    describe('Initialization', () => {
        // Positive test
        it("should create an object with a name, Id, email, and github if provided valid arguments", () => {
            // Assert
            expect(engineer.name).toEqual("Susan");
            expect(engineer.employeeID).toEqual("15");
            expect(engineer.email).toEqual("susan@gmail.com");
            expect(engineer.github).toEqual("susanm9");
        });
    });

    describe('getGithub function', () => {
        it("should return the github", () => {
            expect(engineer.getGithub()).toEqual("susanm9");
        });
    });

    describe('getRole function', () => {
        it("should return the role", () => {
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });

});