import utils from '@utils';
import schemaLint from './schemaLint';

const { message } = utils;

const lint = (item, type) => {
  if (!item.type) return message('predefined', 'missingType');
  if (item.type !== type) return message('predefined', 'typeMismatch');

  const validation = schemaLint(item, item.type);

  return message({
    isValid: validation.isValid,
    errors: validation.errors,
  });
};

export default lint;
