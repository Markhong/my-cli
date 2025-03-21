#!/usr/bin/env node

const commander = require("commander");
const program = new commander.Command();
const chalk = require("chalk");
const inquirer = require("inquirer");
const ora = require("ora");

//----------------------commander--------------------
// program
//   .name('comm100-cli')
//   .description('Comm100 Front-end Scaffolding')
//   .version('0.0.1');

// program.command('split')
//   .description('Split a string into substrings and display as an array')
//   .argument('<string>', 'string to split')
//   .option('-f, --first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

// program.parse(process.argv);

// const options = program.opts();
// console.log(options);

//-------------chalk----------------
// console.log(chalk.red("hello world"));
// console.log(chalk.yellow("hello world"));
// console.log(chalk.red.bold("hello world"));
// console.log(chalk.red.bgGreen("hello world"));

//-----------------inquirer----------------
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'Application Name:',
//       message: 'Please enter your application name',
//       default: 'My app',
//     },
//     {
//       type: 'confirm',
//       name: 'Is add typescript',
//       default: true
//     }
//   ])
//   .then((answers) => {
//     console.log(answers);
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

//---------------ora-------------------
// const spinner = ora('downloading').start();
// setTimeout(() => {
//   spinner.text = 'Hold on please...',
//   spinner.color = 'red'
// }, 3000)

// setTimeout(() => {
//   // spinner.succeed('Download successfully')
//   spinner.fail('Download failed')
// }, 5000)

//------------------figlet-----------------
const figlet = require("figlet");

figlet(
  "Comm100",
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);
