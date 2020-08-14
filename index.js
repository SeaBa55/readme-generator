const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is your project title?",
    },
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
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3","None"],
    },
    {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install your dependencies?",
    },
    {
    type: "input",
    name: "tests",
    message: "What command should be executed to run your tests?",
    },
    {
    type: "input",
    name: "repo",
    message: "What does the user need to know about using this project?",
    },
    {
    type: "input",
    name: "contributions",
    message: "What does the user need to know about contributing to the repo?",
    }
];

// function to deploy user prompts to the CL terminal
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

// send data off to generateMarkdown.js to be processed into README.md
userPrompt()
.then(function(data) {
    writeToFile("README.md",data);
})
.then(function(){
    console.log("success");
})
.catch(function(error) {
    console.log(error);
});