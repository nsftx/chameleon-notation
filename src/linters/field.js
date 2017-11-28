const Ajv = require('ajv');
const { fields } = require('../definitions');
const { message } = require('../utils');

const lint = (item) => {
  if (!item.type) {
    return message(
      { valid: false },
      'Invalid data source provided - missing "type" property.',
    );
  }

  const fieldType = item.type;
  const schema = fields[fieldType];
  const ajv = new Ajv({
    allErrors: true,
    $data: true,
    schemas: [schema, fields.base],
  });

  ajv.addKeyword('v-withDecimals', {
    validate: (sch, data) => (!sch ? data === parseInt(data, 10) : true),
  });

  const validate = ajv.getSchema('http://chameleon-notation/field-money.json#');
  const validation = validate(item);

  return message({
    valid: validation,
    errors: validate.errors,
  });
};

module.exports = lint;
