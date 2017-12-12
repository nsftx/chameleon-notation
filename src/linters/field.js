import definitions from '@definitions';
import utils from '@utils';
import schemaLint from './schemaLint';

const { fields } = definitions;
const { message } = utils;

const lint = (item) => {
  const fieldType = item.type;
  if (!fieldType) return message('predefined', 'missingType');

  const schema = fields[fieldType];
  if (!schema) return message('predefined', 'invalidFieldType');

  const validation = schemaLint(item, fieldType);

  return message({
    isValid: validation.isValid,
    errors: validation.errors,
  });
};

const belongs = type => !!fields[type];

export { lint as field, belongs as isField };
