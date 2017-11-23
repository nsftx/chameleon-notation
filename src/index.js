const { version } = require('../package.json');
const linters = require('./linters');

const ChameleonNotation = {
  version,
  validateField: linters.lintField,
};

module.exports = ChameleonNotation;
