import definitions from '@definitions';
import utils from '@utils';
import schemaLint from './schemaLint';

const { fields } = definitions;
const { message } = utils;

const lint = (item) => {
  const fieldType = item.type;

  if (!fieldType) {
    return message(
      { valid: false },
      'Invalid data source provided - missing "type" property.',
    );
  }

  const schema = fields[fieldType];

  if (!schema) {
    return message(
      { valid: false },
      `Invalid data source provided - validation for field type "${fieldType}" is not supported.`,
    );
  }

  const validation = schemaLint(item, fieldType);

  return message({
    valid: validation.valid,
    errors: validation.errors,
  });
};

const belongs = type => !!fields[type];

export { lint as field, belongs as isField };
