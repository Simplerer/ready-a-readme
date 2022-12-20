const inquirer = require('inquirer');
const fs = require('fs');
const prompt = inquirer.createPromptModule();

const populate = (readMe) =>{
  fs.writeFileSync('READAME.md', readMe)
}

const makeReadme = (answers) => {
  if (answers.license === 'MIT') {
    answers.license = `MIT
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`}
  if (answers.license === 'GNU GPLv2') {
    answers.license = `GNU GPLv2
    [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`}
  if (answers.license === 'Apache') {
    answers.license = `Apache
    [[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`}
  if (answers.license === 'MIT') {
    answers.license = `MIT
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`}
  if (answers.license === 'MIT') {
    answers.license = `MIT
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`}
  
  return `# ${answers.projectname}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  If you need any more information on using this application, my email is ${answers.email}.
  Refer to the repo here - >  ${answers.github}  < -`
}

prompt([
  {
    message: 'What will you be calling this applicaiton?',
    name: 'projectname'
  },
  {
    message: 'What is your email address?',
    name: 'email'
  },
  {
    message: 'What is your GitHub handle?',
    name: 'github'
  },
  {
    message: 'How would you describe your project?',
    name: 'description'
  },
  {
    message: 'Are there any special instructions for set-up?',
    name: 'installation'
  },
  {
    message: 'How would you use this project?',
    name: 'usage'
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
]).then(makeReadme)
  .then(populate)