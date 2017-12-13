import _ from 'lodash';
import { field as fieldLinter, isField } from '@linters/field';
import fieldSrc from '@examples/field.json';

describe('linters', () => {
  describe('fieldLinter', () => {
    it('successfully lints valid field json', () => {
      const result = {
        isValid: true,
        errors: null,
        message: 'Provided source is valid.',
      };

      expect(fieldLinter(fieldSrc)).to.deep.equal(result);
    });

    it('returns missing type error if field json does not have type prop', () => {
      const fieldSrcCopy = _.clone(fieldSrc);
      const result = {
        isValid: false,
        errors: null,
        message: 'Invalid data source provided - missing "type" property.',
      };

      delete fieldSrcCopy.type;

      expect(fieldLinter(fieldSrcCopy)).to.deep.equal(result);
    });

    it('returns field type error if field json type is not supported in definitions', () => {
      const fieldSrcCopy = _.clone(fieldSrc);
      const result = {
        isValid: false,
        errors: null,
        message: 'Invalid data source provided - validation for provided field type is not supported.',
      };

      fieldSrcCopy.type = 'custom';

      expect(fieldLinter(fieldSrcCopy)).to.deep.equal(result);
    });

    it('checks if some field type belongs to field definitions', () => {
      expect(isField('text')).to.be.true;
      expect(isField('custom')).to.be.false;
    });
  });
});
