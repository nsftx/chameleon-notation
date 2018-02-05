const utils = require('./utils');
const linter = require('../dist/chameleon-notation');

const { message } = linter;

const parseSource = (file, data) => {
  let src = null;

  if (file) {
    src = utils.getFile(file);
  } else {
    try {
      src = JSON.parse(data);
    } catch (e) {
      src = data;
    }
  }

  if (!src.type) return message('predefined', 'missingType');

  return {
    src,
  };
};

const performLint = (src, type) => linter[`validate${type}`](src);

const getLinter = (type) => {
  return (file, data) => {
    const source = parseSource(file, data);
    if (source.message) return source;

    return performLint(source.src, type);
  }
};

module.exports = {
  validate: getLinter(''),
  validateField: getLinter('Field'),
  validateWidget: getLinter('Widget'),
  validatePage: getLinter('Page'),
};
