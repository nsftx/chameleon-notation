import utils from '@utils';
import schemaLint from './schemaLint';

const { message } = utils;

const lint = (item) => {
  if (!item.type) {
    return message(
      { isValid: false },
      'Invalid data source provided - missing "type" property.',
    );
  }

  const validation = schemaLint(item, 'form');

  return message({
    isValid: validation.isValid,
    errors: validation.errors,
  });
};

export default lint;
