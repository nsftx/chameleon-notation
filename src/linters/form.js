import utils from '@utils';
import schemaLint from './schemaLint';

const { message } = utils;

const lint = (item) => {
  if (!item.type) {
    return message(
      { valid: false },
      'Invalid data source provided - missing "type" property.',
    );
  }

  const validation = schemaLint(item, 'form');

  return message({
    valid: validation.valid,
    errors: validation.errors,
  });
};

export default lint;
