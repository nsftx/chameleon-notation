import schemaLint from './schemaLint';
import utils from '../utils';

const { message } = utils;

const lint = (item) => {
  if (!item.type) {
    return message(
      { valid: false },
      'Invalid data source provided - missing "type" property.',
    );
  }

  const validation = schemaLint(item, item.type);

  return message({
    valid: validation.valid,
    errors: validation.errors,
  });
};

export default lint;
