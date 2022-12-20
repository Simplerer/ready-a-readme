// const inquirer = require('inquirer');
const fs = require('fs');
// const prompt = inquirer.createPromptModule();

const populate = (readMe) =>{
    fs.writeFileSync('SamplerREADME.md', readMe)
}
  
const makeReadme = (answers) => {
    let licenseBadge;
    if (answers.license === 'MIT') {
       licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`}
    if (answers.license === 'GNU GPLv2') {
      licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`}
    if (answers.license === 'Apache') {
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`}
    if (answers.license === 'GPLv3') {
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`}
    if (answers.license === 'BSD3-clause') {
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`}
    
    return `# ${answers.projectname}
  
    ## ${licenseBadge}
    
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
    This application is covered under the ${answers.license} licensing.
    For information on what this license covers please visit this source [Choose a License](https://choosealicense.com/appendix/)
    
    ## Contributing
    ${answers.contributing}
    
    ## Tests
    ${answers.tests}
    
    ## Questions
    If you need any more information on using this application, my email is ${answers.email}.
    My GitHub profile can be located here - >  [${answers.github}](https://github.com/${answers.github})  < -`
}

module.exports = {
    populate,
    makeReadme,
};