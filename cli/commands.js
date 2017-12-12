const utils = require('./utils');
const linter = require('../dist/chameleon-notation');

const { message } = linter;

const parseSource = (file, data) => {
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
      { isValid: false },
      'Invalid data source provided - missing "type" property.');
  }

  return {
    src,
  }
};

const performLint = (src, type) => linter[`validate${type}`](src);

const lintField = (file, data) => {
  const source = parseSource(file, data);

  if (source.message) return source;

  return performLint(source.src, 'Field');
};

const lintForm = (file, data) => {
  const source = parseSource(file, data);

  if (source.message) return source;

  return performLint(source.src, 'Form');
};

const lintPage = (file, data) => {
  const source = parseSource(file, data);

  if (source.message) return source;

  return performLint(source.src, 'Page');
};

const lintAll = (file, data) => {
  const source = parseSource(file, data);

  if (source.message) return source;

  return performLint(source.src, '');
};

module.exports = {
  validate: lintAll,
  validateField: lintField,
  validateForm: lintForm,
  validatePage: lintPage,
};
