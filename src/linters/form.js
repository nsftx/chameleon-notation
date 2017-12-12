import utils from '@utils';
import schemaLint from './schemaLint';

const { message } = utils;

const lint = (item) => {
  if (!item.type) return message('predefined', 'missingType');

  const validation = schemaLint(item, 'form');

  return message({
    isValid: validation.isValid,
    errors: validation.errors,
  });
};

export default lint;
