import linters from '@linters';
import utils from '@utils';
import { version } from '../package.json';

const { message } = utils;

const lint = (type, data) => {
  if (linters[`lint${type}`]) {
    return linters[`lint${type}`](data);
  }

  return message({ valid: false });
};

const ChameleonNotation = {
  version,
  message,
  validate: lint,
  validateField: linters.lintField,
  validateForm: linters.lintForm,
};

export default ChameleonNotation;
