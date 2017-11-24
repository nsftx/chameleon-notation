const { version } = require('../package.json');
const linters = require('./linters');
const { message } = require('./utils');

const lint = (type, data) => {
  if (linters[`lint${type}`]) {
    return linters[`lint${type}`](data);
  }

  return message({ valid: false });
};

const ChameleonNotation = {
  version,
  validate: lint,
  validateField: linters.lintField,
};

module.exports = ChameleonNotation;
