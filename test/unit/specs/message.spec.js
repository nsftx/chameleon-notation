import utils from '@utils';

const { message } = utils;

const errors = [
  {
    keyword: 'cn-allowedBooleanType',
    message: 'when type is boolean, allowed value is false',
    params: {
      keyword: 'cn-allowedBooleanType',
    },
    dataPath: '.prependIcon',
    schemaPath: 'field-base.json#prependIcon/cn-allowedBooleanType',
  },
  {
    keyword: 'type',
    dataPath: '.clearable',
    schemaPath: 'field-base.json#clearable/type',
    params: {
      type: 'boolean',
    },
    message: 'should be boolean',
  },
  {
    keyword: 'enum',
    dataPath: '.validateOn',
    schemaPath: '#/anyOf/0/properties/validateOn/enum',
    params: {
      allowedValues: ['blur', 'input', 'submit'],
    },
    message: 'should be equal to one of the allowed values',
  },
];

describe('message', () => {
  it('parses basic error object', () => {
    const result = message({
      isValid: false,
      errors: [errors[0]],
    });

    expect(result).to.have.property('isValid');
    expect(result).to.have.property('errors');
    expect(result).to.have.property('message');
  });

  it('parses error object with type params', () => {
    const result = message({
      isValid: false,
      errors: [errors[1]],
    });

    expect(result.message).to.equal('Error in .clearable. should be boolean. \nAllowed type(s): boolean');
  });

  it('parses error object with allowed values', () => {
    const result = message({
      isValid: false,
      errors: [errors[2]],
    });

    expect(result.message).to.equal('Error in .validateOn. should be equal to one of the allowed values. \nAllowed value(s): blur, input, submit');
  });
});
