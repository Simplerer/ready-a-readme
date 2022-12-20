const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What are you calling your project?',
      name: 'project-name',
    },
    {
      type: 'input',
      message: 'Describe your project: ',
      name: 'description',
    },
    {
      type: 'checkbox',
      message: 'What elements will your project include?',
      name: 'table of contents',
      choices: ['Title', 'Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
    },
    {
      type: 'input',
      message: 'How is this application used?',
      name: 'usage information',  
    },
    {
      type: 'input',
      message: 'Any special considerations in installing?',
      name: 'installation',
    },
    // {
    //   type: 'list',
    //   message: 'Which licence will you be using?',
    //   name: 'license',
    //   choices: [] ,
    // },
    {
      type: 'input',
      message: 'How can someone contribute?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',  
    },
    {
      type: 'input',
      message: 'Please enter your email: ',
      name: 'email',  
    },
  ])
  .then((response) => {
    console.log(response);
    fs.appendFile('READM.md', JSON.stringify(response), (err) => {
        err ? console.error(err) : console.log('One READEME comming right up!')
    } )
  });