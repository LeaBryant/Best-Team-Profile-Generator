//Packages
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");


// Array of inquirer questions that are prompted for all employees.
let employeeArray = [];


const startMenu = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: 'employee_selection',
                message: "Choose what type of Employee you're adding from the list:",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "Quit",
                ]
            }
        ])
        .then((answers) => {
            if (answers.employee_selection == "Manager") {
                addManagertoArray();
            }
            else if (answers.employee_selection == "Engineer") {
                addEngineertoArray();
            }
            else if (answers.employee_selection == "Intern") {
                addInterntoArray();
            }
            else {
                compileTeam();
                console.log("Thank you for using the application. If you added a team member, the index.html file can be found in the dist folder.")
                return;
            }
        })
}

const addManagertoArray = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?",
            },

            {
                type: "input",
                name: "Id",
                message: "What is the manager's ID?",
            },

            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
            },

            {
                type: "input",
                name: "office_number",
                message: "What is the manager's office number?",
            },
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.Id, answers.email, answers.office_number);
            employeeArray.push(manager);
            console.log("A manager has been added with the following information:");
            console.log("Name: " + manager.name+ ", ID: " + manager.Id + ", Email: " + manager.email + ", Office Number: " + manager.officeNumber);
            startMenu();
        }
        )
}

const addEngineertoArray = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
            },

            {
                type: "input",
                name: "Id",
                message: "What is the engineer's ID?",
            },

            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?",
            },

            {
                type: "input",
                name: "github",
                message: "What is the engineer's github username?",
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.Id, answers.email, answers.github);
            employeeArray.push(engineer);
            console.log("An engineer has been added with the following information:");
            console.log("Name: " + engineer.name+ ", ID: " + engineer.Id + ", Email: " + engineer.email + ", Github: " + engineer.github);
            startMenu();
        }
        )
}

const addInterntoArray = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
            },

            {
                type: "input",
                name: "Id",
                message: "What is the intern's ID?",
            },

            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
            },

            {
                type: "input",
                name: "school",
                message: "What is the intern's school?",
            },
        ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.Id, answers.email, answers.school);
            employeeArray.push(intern);
            console.log("An intern has been added with the following information:");
            console.log("Name: " + intern.name+ ", ID: " + intern.Id + ", Email: " + intern.email + ", School: " + intern.school);
            startMenu();
        }
        )
}
// The Create HTML function that checks if the user would like to add an additional employee first, then creates an additional employee or creates the team.html file when the user is done adding employees.
const CreateHTML = async (array) => {
    await inquirer.prompt([
        {
            type: "list",
            message: "Would you like to create another employee?",
            name: "CreateEmployee",
            choices: [
                "Yes",
                "No"
            ]
        }
    ]).then(async (response) => {
        var CreateAnotherEmployee = response.CreateEmployee;

        if (await CreateAnotherEmployee === 'Yes') {
            inquirerEmployee();
        } else if (await CreateAnotherEmployee === 'No') {

            // If the output directory does not exist, then it creates the ouput directory for the user before creating the team.html file.
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
            }
            
            fs.writeFile(outputPath, render(array), (err) => {
        
                if (err) {
                    return console.log(err);
                }
            
                console.log("Your team.html file has been created in the output folder.");
            });

        }
    })
}


const addManagerCard = (manager) => {
    return `
            <div class="col">
                <div class="employee-card">
                <div class="card-banner">
                    <h2>${manager.name}</h2>
                    <h3><i class="fa-solid fa-person-chalkboard"></i> Manager</h3>
                </div>
                <div class="card-info">
                    <h4>ID: ${manager.Id}</h4>
                    <h4>Email: <a href="mailto: ${manager.email}">${manager.email}</a></h4>
                    <h4>Office Number: ${manager.officeNumber}</h4>
                </div>
                </div>
            </div>
    `
}


const addEngineerCard = (engineer) => {
    return `
            <div class="col">
                <div class="employee-card">
                <div class="card-banner">
                    <h2>${engineer.name}</h2>
                    <h3><i class="fa-solid fa-computer"></i> Engineer</h3>
                </div>
                <div class="card-info">
                    <h4>ID: ${engineer.Id}</h4>
                    <h4>Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></h4>
                    <h4>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></h4>
                </div>
                </div>
            </div>
    `
}

const addInternCard = (intern) => {
    return `
            <div class="col">
                <div class="employee-card">
                <div class="card-banner">
                    <h2>${intern.name}</h2>
                    <h3><i class="fa-solid fa-user-graduate"></i> Intern</h3>
                </div>
                <div class="card-info">
                    <h4>ID: ${intern.Id}</h4>
                    <h4>Email: <a href="mailto: ${intern.email}">${intern.email}</a></h4>
                    <h4>School: ${intern.school}</h4>
                </div>
                </div>
            </div>
    `
}
const generateHTML = (team) => {
    return `
    <!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile</title>
        <!--Icons from font awesome-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
        <!--Bootstrap-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <!-- Custom CSS -->
        <link rel="stylesheet" href="./style.css" />
    </head>
    
    <body>
        <h1>My Team</h1>
    
        <div class="container">
            <div class="row row-cols-3 justify-content-center card-grid">
    
        ${team}
        </div>
        </div>
    
        <!-- Bootstrap -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
    `
}

startMenu();