import _ from 'lodash';
import predefinedMessages from '@utils/predefinedMessages';
import { field as fieldLinter, isField } from '@linters/field';
import fieldSrc from '@examples/field.json';

describe('linters', () => {
  describe('fieldLinter', () => {
    it('successfully lints valid field json', () => {
      const result = {
        isValid: true,
        errors: null,
        message: predefinedMessages.valid,
      };

      expect(fieldLinter(fieldSrc)).to.deep.equal(result);
    });

    it('returns missing type error if field json does not have type prop', () => {
      const fieldSrcCopy = _.clone(fieldSrc);
      const result = {
        isValid: false,
        errors: null,
        message: predefinedMessages.missingType,
      };

      delete fieldSrcCopy.type;

      expect(fieldLinter(fieldSrcCopy)).to.deep.equal(result);
    });

    it('returns field type error if field json type is not supported in definitions', () => {
      const fieldSrcCopy = _.clone(fieldSrc);
      const result = {
        isValid: false,
        errors: null,
        message: predefinedMessages.invalidFieldType,
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
