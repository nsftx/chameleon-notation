import utils from '@utils';
import schemaLint from './schemaLint';

const { message } = utils;

const lint = (item) => {
  const validation = schemaLint(item, 'page');

  return message({
    valid: validation.valid,
    errors: validation.errors,
  });
};

export default lint;
