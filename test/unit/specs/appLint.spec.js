import _ from 'lodash';
import appLinter from '@linters/app';
import predefinedMessages from '@utils/predefinedMessages';
import appSrc from '@examples/app.json';

describe('linters', () => {
  describe('appLinter', () => {
    it('successfully lints valid app json', () => {
      appSrc.type = 'app';
      const result = {
        isValid: true,
        errors: null,
        message: predefinedMessages.valid,
      };

      expect(appLinter(appSrc, '')).to.deep.equal(result);
    });

    it('returns missing error if app json does not have id prop', () => {
      const appSrcCopy = _.clone(appSrc);
      appSrcCopy.id = 'test';

      expect(appLinter(appSrcCopy, '').isValid).to.equal(false);
    });
  });
});
