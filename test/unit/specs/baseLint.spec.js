import _ from 'lodash';
import baseLinter from '@linters/base';
import predefinedMessages from '@utils/predefinedMessages';
import pageSrc from '@examples/page.json';

describe('linters', () => {
  describe('baseLinter', () => {
    it('successfully lints valid page json', () => {
      const result = {
        isValid: true,
        errors: null,
        message: predefinedMessages.valid,
      };

      expect(baseLinter(pageSrc, 'page')).to.deep.equal(result);
    });

    it('returns missing type error if page json does not have type prop', () => {
      const pageSrcCopy = _.clone(pageSrc);
      const result = {
        isValid: false,
        errors: null,
        message: predefinedMessages.missingType,
      };

      delete pageSrcCopy.type;

      expect(baseLinter(pageSrcCopy, 'page')).to.deep.equal(result);
    });

    it('returns mismatch error if page json type mismatches passed type', () => {
      const result = {
        isValid: false,
        errors: null,
        message: predefinedMessages.typeMismatch,
      };

      expect(baseLinter(pageSrc, 'form')).to.deep.equal(result);
    });
  });
});
