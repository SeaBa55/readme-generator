const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    },
    {
    type: "input",
    name: "email",
    message: "What is your email address?",
    },
    {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
    },
    {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
    },
    {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install your dependencies?",
    },
    {
    type: "input",
    name: "tests",
    message: "What command should be run to run your tests?",
    },
    {
    type: "input",
    name: "repo",
    message: "What does the user need to know about using the repo?",
    },
    {
    type: "input",
    name: "contributions",
    message: "What does the user need to know about contributing to the repo?",
    }
];

function userPrompt() {
    return inquirer.prompt(questions);
}

// function to write README file
function writeToFile(fileName,data) {
    fs.writeFile(fileName,generateMarkdown(data),function(error) {

        console.log(fileName + " generated");

        if(error) {
            throw error;
        }
    });
}

userPrompt()
.then(function(data) {
    writeToFile("gooseREADME.md",data);
})
.then(function(){
    console.log("success");
})
.catch(function(error) {
    console.log(error);
});

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
