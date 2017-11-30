import linters from '@linters';
import utils from '@utils';
import { version } from '../package.json';

const { message } = utils;

const ChameleonNotation = {
  version,
  message,
  validate: linters.lint,
  validatePage: linters.lintPage,
  validateField: linters.lintField,
  validateForm: linters.lintForm,
};

export default ChameleonNotation;
