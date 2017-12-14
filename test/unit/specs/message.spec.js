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
    expect(result.message).to.equal('.prependIcon when type is boolean, allowed value is false. In field-base.json#prependIcon/cn-allowedBooleanType');
  });

  it('parses error object with type params', () => {
    const result = message({
      isValid: false,
      errors: [errors[1]],
    });

    expect(result.message).to.equal('.clearable should be boolean. In field-base.json#clearable/type\n Should be of type: boolean');
  });

  it('parses basic error object', () => {
    const result = message({
      isValid: false,
      errors: [errors[2]],
    });

    expect(result.message).to.equal('.validateOn should be equal to one of the allowed values. In #/anyOf/0/properties/validateOn/enum\n Allowed values: blur, input, submit');
  });
});
