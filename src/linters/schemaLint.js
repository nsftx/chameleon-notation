import Ajv from 'ajv';
import definitions from '@definitions';

let ajv;
let validate = null;

const addKeywords = () => {
  // Custom keyword for number/integer differentiation
  ajv.addKeyword('cn-withDecimals', {
    validate: (schema, data) => (!schema ? data === parseInt(data, 10) : true),
  });

  // Custom keyword for allowing only one of the boolean values
  ajv.addKeyword('cn-allowedBooleanType', {
    validate: function myValidation(schema, data) {
      const dataType = typeof data;
      if (dataType !== 'boolean') return true;

      const result = schema === data;

      if (!result) {
        if (myValidation.errors === null) myValidation.errors = [];

        myValidation.errors.push({
          keyword: 'cn-allowedBooleanType',
          message: `when type is boolean, allowed value is ${schema}`,
          params: {
            keyword: 'cn-allowedBooleanType',
          },
        });
      }

      return (schema === data);
    },
  });
};

const initialize = (type) => {
  ajv = new Ajv({
    allErrors: true,
    $data: true,
    schemas: Object.values(definitions.items),
  });

  addKeywords();
  validate = ajv.getSchema(definitions.mapper[type]);
  return validate;
};

const updateSchema = (type) => {
  validate = ajv.getSchema(definitions.mapper[type]);
  return validate;
};

const get = type => (validate ? updateSchema(type) : initialize(type));

const lint = (item, type) => {
  const validator = get(type);
  const result = validator(item);

  return {
    valid: result,
    errors: validate.errors,
  };
};

export default lint;
