const Ajv = require('ajv');
const { fields } = require('../definitions');

const lint = (item) => {
  const fieldType = item.type;
  const schema = fields[fieldType];
  const ajv = new Ajv({
    allErrors: true,
    $data: true,
  });
  const validate = ajv.compile(schema);
  const valid = validate(item);

  return {
    valid,
    errors: validate.errors || null,
  };
};

module.exports = lint;
