const inquirer = require('inquirer');
const { makeReadme, populate } = require('./util/index')
const { content } = require('./content');
const prompt = inquirer.createPromptModule();

prompt(content)
  .then(makeReadme)
  .then(populate)