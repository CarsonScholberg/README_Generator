// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMD = require("./utils/generateMarkdown");
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: "Tell me your Github Username"
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email: ',
        validate: function(email){
            if(email == '' || email == null || email == undefined){
                console.log("\nPlease enter a valid email.")
            } else if (email.includes('@') === false || email.includes('.edu') === false){
                console.log("\nValid emails include @ and .com")
            }else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? "
    },
    {
        type: "input",
        name: "description",
        message: "Write a short description about your project: "
    },
    {
        type: "input",
        name: "install",
        message: "Give me the instructions on how to install your project: "
    },
    {
        type: "input",
        name: "usage",
        message: "What are some use case scenarios? "
    },
    {
        name: "contributing",
        message: "What developers contributed in this project? "
    },
    {
        name:"test",
        message: "Enter any test environments that you included in your project: "
    },
    {
        type: "list",
        name: "license",
        message: "What license are you using?",
        choices: ["GNU", "Apache", "MIT", 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log("check your files! Thank you for using my constructor!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            writeToFile('README.md', generateMD(response))
        })
}

// var obj ={
//     key: "value"
// }

// Function call to initialize app
init();
