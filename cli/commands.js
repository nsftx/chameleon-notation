const utils = require('./utils');
const linter = require('../src');

const lintField = (file, data) => {
  let src = null;

  if (file) {
    src = utils.getFile(file);
  } else {
    try{
      src = JSON.parse(data);
    } catch(e) {
      src = data;
    }
  }

  if (!src.type) {
    return {
      valid: false,
      message: 'Invalid data source provided - missing "type" property.',
    };
  }

  const validation = linter.validateField(src);
  return {
    valid: validation.valid,
    message: validation.errors || 'Provided source is valid.',
  };
};

const lintForm = () => {
  return {
    valid: false,
    message: 'This command is not implemented yet.',
  }
};

const lintAll = () => {
  return {
    valid: false,
    message: 'This command is not implemented yet.',
  }
};

module.exports = {
  validate: lintAll,
  validateField: lintField,
  validateForm: lintForm,
};
