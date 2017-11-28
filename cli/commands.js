const utils = require('./utils');
const linter = require('../dist/chameleon-notation').default;

const { message } = linter;

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
    return message(
      { valid: false },
      'Invalid data source provided - missing "type" property.');
  }

  const validation = linter.validateField(src);
  return message(validation);
};

const lintForm = () => message({ valid: false });

const lintAll = () => message({ valid: false });

module.exports = {
  validate: lintAll,
  validateField: lintField,
  validateForm: lintForm,
};
