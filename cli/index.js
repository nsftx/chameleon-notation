#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const { version } = require('../package.json');
const commands = require('./commands');
const help = require('./help');

if (argv.h) {
  help();
  process.exit(2);
} else if (argv.v) {
  console.log(version);
  process.exit(2);
}

const inputCommand = argv._[0];
const inputFile = argv.f || null;
const inputData = argv.d || null;
let command = null;

if (inputCommand) {
  if (!commands[inputCommand]) {
    console.error('Unknown command:', inputCommand);
    help();
    process.exit(2);
  } else {
    command = commands[inputCommand];
  }
} else {
  command = commands.validate;
}

if (!inputFile && !inputData) {
  console.error('Missing data for validation!');
  help();
  process.exit(2);
}

const validation = command(inputFile, inputData);
console.log(validation.message);
process.exit(validation.valid ? 0 : 1);
