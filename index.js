// Starter code imports
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template");

// Output directory and path for the HTML file
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Array to store team member objects
const team = [];

// Function to start the application and add a Manager
function init() {
    console.log("Answer the following Q's to create your Team!");
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What\'s your team manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What\'s your team manager's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What\'s your team manager's email address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What\'s the number of your team manager's office?"
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        addTeamMember();
    });
}

// Function to present menu options
function addTeamMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do now?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team']
        }
    ]).then(answer => {
        switch (answer.action) {
            case 'Add an Engineer':
                addEngineer();
                break;
            case 'Add an Intern':
                addIntern();
                break;
            case 'Finish building the team':
                buildTeam();
                break;
        }
    });
}

// Function to add an Engineer
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What\'s this engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What\'s this engineer's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What\'s this engineer's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What\'s this engineer's GitHub username?"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        addTeamMember();
    });
}

// Function to add an Intern
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What\'s this intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What\'s this intern's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What\'s this intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school or university does this intern attend?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        addTeamMember();
    });
}

// Start the application
init();
