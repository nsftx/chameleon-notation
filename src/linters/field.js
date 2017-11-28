import Ajv from 'ajv';
import definitions from '../definitions';
import utils from '../utils';

const { fields } = definitions;
const { message } = utils;

const lint = (item) => {
  if (!item.type) {
    return message(
      { valid: false },
      'Invalid data source provided - missing "type" property.',
    );
  }

  const fieldType = item.type;
  const schema = fields[fieldType];

  if (!schema) {
    return message(
      { valid: false },
      `Invalid data source provided - validation for field type "${fieldType}" is not supported.`,
    );
  }

  const ajv = new Ajv({
    allErrors: true,
    $data: true,
    schemas: [schema, fields.base],
  });

  ajv.addKeyword('v-withDecimals', {
    validate: (sch, data) => (!sch ? data === parseInt(data, 10) : true),
  });

  const validate = ajv.getSchema('http://chameleon-notation/field-text.json#');
  const validation = validate(item);

  return message({
    valid: validation,
    errors: validate.errors,
  });
};

export default lint;
