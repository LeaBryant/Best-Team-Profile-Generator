const Intern = require('../lib/Intern');


describe('Intern', () => {
    describe('build', () => {
        it("display name, Id, email, and school", () => {
            expect(intern.name).toEqual("Lea");
            expect(intern.Id).toEqual("1");
            expect(intern.email).toEqual("lb123@gmail.com");
            expect(intern.school).toEqual("UofA");
        });
    });

    describe('Intern Info', () => {
        it("Return a Intern info", () => {
            expect(intern.getSchool()).toEqual("UofA");
        });
    });

    describe('getRole function', () => {
        it("should return the role", () => {
            expect(intern.getRole()).toEqual("Intern");
        });
    });

});