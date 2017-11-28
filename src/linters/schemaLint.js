import Ajv from 'ajv';
import definitions from '../definitions';

let ajv;
let validate = null;

const addKeywords = () => {
  ajv.addKeyword('v-withDecimals', {
    validate: (sch, data) => (!sch ? data === parseInt(data, 10) : true),
  });
};

const initialize = (type) => {
  ajv = new Ajv({
    allErrors: true,
    $data: true,
    schemas: Object.values(definitions.fields),
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
