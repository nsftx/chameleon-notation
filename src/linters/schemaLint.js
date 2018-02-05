import Ajv from 'ajv';
import definitions from '@definitions';
import keywords from '@keywords';

let ajv;
let validate = null;

const addKeywords = () => {
  ajv.addKeyword(keywords.withDecimals.name, keywords.withDecimals.definition);
  ajv.addKeyword(keywords.allowedBooleanType.name, keywords.allowedBooleanType.definition);
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
  console.log(type);
  validate = ajv.getSchema(definitions.mapper[type]);
  return validate;
};

const get = type => (validate ? updateSchema(type) : initialize(type));

const lint = (item, type) => {
  const validator = get(type);
  const result = validator(item);

  return {
    isValid: result,
    errors: validate.errors,
  };
};

export default lint;
