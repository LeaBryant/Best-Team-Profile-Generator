//Packages
const inquirer = require("inquirer");
const fs = require("fs");
//const generateHTML = require("./generateHTML")
const path = require("path");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const validation = (input) => {
    if (input !== "") {
        return true;
    }
    return "Please enter a response"
}

//Profile Questions

const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName",
        validate: validation
    },
    {
        type: "input",
        message: "What is the manager's employee ID?",
        name: "managerID",
    },
    {
        type: "input",
        message: "What is the manager's email address?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "managerOffice",
    },
]

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName",
        validate: validation
    },
    {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "engineerID",
    },
    {
        type: "input",
        message: "What is the engineer's email address?",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "What is the engineer's Github username?",
        name: "engineerUsername",
    },
]

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName",
        validate: validation,
    },
    {
        type: "input",
        message: "What is the intern's employee ID?",
        name: "internID",
    },
    {
        type: "input",
        message: "What is the intern's email address?",
        name: "internEmail",
    },
    {
        type: "input",
        message: "Where does the intern go to school?",
        name: "internSchool",
    },
]

const menuQuestion =
{
    type: "list",
    message: "Choose option",
    name: "teamMember",
    choices: ["add a engineer", "add a intern", "finish building my team"]
}


//Function to build team
function buildTeam() {
    inquirer
        .prompt(managerQuestions).then((answers) => {


            menu()
        })

}

function addEngineer() {
    inquirer
        .prompt(engineerQuestions).then((answers) => {
            menu()

        })
}

function addIntern() {
    inquirer
        .prompt(internQuestions).then((answers) => {
            menu()
        })
}

function generateHTML() {

}

function menu() {
    inquirer.prompt(menuQuestion).then((answer) => {
        switch (answer.teamMember) {
            case 'add a engineer':
                console.log("chose an engineer");
                addEngineer()
                break;
            case 'add a intern':
                console.log("chose an intern");
                addIntern()
                break;
            default:
                console.log("chose to finish");
                generateHTML()
                break;
        }
    })
}

// // Function to write HTML file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data)
// }

// // Function to initialize app
// function init() {
//     inquirer
//         .prompt(managerQuestions).then((response) => {
//             writeToFile("index.html", generateHTML(response));
//         });
// }

// // Function call to initialize app
// init();
buildTeam();