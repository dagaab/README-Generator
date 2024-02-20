const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "How to install the application?",
    },
    {
        type: "input",
        name: "usage",
        message: "Describe the usage of this application.",
    },
    {
        type: "checkbox",
        name: "licence",
        message: "Please select the licence",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Please describe contribution guidelines",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide a test guidelines"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        // console.log("Create a README file");
        writeToFile("./README.md", generateMarkdown({...answers}));
    });
}

// function call to initialize program
init();
