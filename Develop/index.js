// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown  = require('./utils/generateMarkdown.js')
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your projects name?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please write a short description of your project',
    name: 'description',
  },
  {
    type: 'list',
    message: 'What kind of license should your project have?',
    choices: [
      'MIT',
      'Apache 2.0 License',
      'IBM Public License Version 1.0',
      'Mozilla Public License 2.0',
      'No License',
    ],
    name: 'license',
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'dependencies',
  },
  {
    type: 'input',
    message: 'What command should be run to run test?',
    name: 'test',
  },
  {
    type: 'input',
    message: 'What does your user need to know about using the repo?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What does your user need to know about contributing to the repo?',
    name: 'contributing',
  },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
  inquirer
  .prompt(questions) 
  .then((response) =>
  fs.writeFile('README.md', generateMarkdown(response) , (err) =>
  err ? console.error(err) : console.log('README Generated!')
));
  }

// TODO: Create a function to initialize app
function init() { writeToFile()
}

// Function call to initialize app
init();
