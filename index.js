const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: [
      'MIT',
      'GPL 3.0',
      'Apache 2.0',
      'BSD 3-Clause',
      'None'
    ]
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines for your project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for your project:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`README.md has been generated!`);
    }
  });
}

function init() {
  inquirer.prompt(questions)
    .then(data => {
      const markdown = generateMarkdown(data);
      writeToFile('README.md', markdown);
    })
    .catch(err => console.error(err));
}

init();
