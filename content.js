const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();


  prompt([
    {
      message: 'What will you be calling this applicaiton?',
      name: 'projectname',
    },
    {
      message: 'What is your email address?',
      name: 'email',
    },
    {
      message: 'What is your GitHub handle?',
      name: 'github',
    },
    {
      message: 'How would you describe your project?',
      name: 'description',
    },
    {
      message: 'Are there any special instructions for set-up?',
      name: 'installation',
    },
    {
      message: 'How would you use this project?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Which licenses will you be using?',
      name: 'license',
      choices: ['MIT', 'GNU GPLv2', 'Apache', 'GPLv3', 'BSD3-clause'],
    },
    {
      message: 'How can someone contribute to this project?',
      name: 'contributing',
      default: 'N/A',
    },
    {
      message: 'Any instructions on how to test this application?',
      name: 'tests',
      default: 'N/A',
    },
  ])

  module.exports = {
    content
  };