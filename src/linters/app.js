import utils from '@utils';
import schemaLint from './schemaLint';

const { message } = utils;

const lint = (item) => {
  const validation = schemaLint(item, item.type);

  return message({
    isValid: validation.isValid,
    errors: validation.errors,
  });
};

export default lint;
