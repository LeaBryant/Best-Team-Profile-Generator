const Engineer = require('../lib/Engineer');

jest.mock("fs");

describe('Engineer', () => {
    describe('build', () => {
        it("should have name, Id, email, and github ", () => {
            const name = "Lea";
            const id = 1;
            const email ="lb123@gmail.com";
            const github = "gitTest";

            const result = new Engineer(name,email,id,github);
      
        expect(result).toEqual("Lea");
        expect(result).toEqual(1);
        expect(result.name).toEqual(result.getName());
        });
    });

    describe("EngineerInfo", () =>{
        it("Return a Engineer info", () => {
            const data = ["Lea", 1, "email"];

            const result = new Engineer(...data);

            expect(result.getRole()).toEqual("Engineer");
        })
    });
})

            
//             expect(engineer.name).toEqual("Susan");
//             expect(engineer.Id).toEqual("15");
//             expect(engineer.email).toEqual("susan@gmail.com");
//             expect(engineer.github).toEqual("susanm9");
//         });
//     });

//     describe('getGithub function', () => {
//         it("should return the github", () => {
//             expect(engineer.getGithub()).toEqual("susanm9");
//         });
//     });

//     describe('getRole function', () => {
//         it("should return the role", () => {
//             expect(engineer.getRole()).toEqual("Engineer");
//         });
//     });

// });