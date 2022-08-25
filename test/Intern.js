const Intern = require('../lib/Intern');

test("add school to intern", () =>  {
const employee = new Intern('Claire', '12A', 'email', 'school')
expect (employee.school).toBe('school');
});

test("the getRole() function should overide and return intern", () => {
    const employee =  new Intern('Claire', '12A', 'email', 'office', 'school'); 
    expect(employee.getRole()).toBe("Intern");
});
