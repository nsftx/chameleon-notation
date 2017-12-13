import _ from 'lodash';
import baseLinter from '@linters/base';
import pageSrc from '@examples/page.json';
import formSrc from '@examples/form.json';

describe('linters', () => {
  describe('baseLinter', () => {
    it('successfully lints valid page and form json', () => {
      const result = {
        isValid: true,
        errors: null,
        message: 'Provided source is valid.',
      };

      expect(baseLinter(pageSrc, 'page')).to.deep.equal(result);
      expect(baseLinter(formSrc, 'form')).to.deep.equal(result);
    });

    it('returns missing type error if page and form json do not have type prop', () => {
      const pageSrcCopy = _.clone(pageSrc);
      const formSrcCopy = _.clone(formSrc);
      const result = {
        isValid: false,
        errors: null,
        message: 'Invalid data source provided - missing "type" property.',
      };

      delete pageSrcCopy.type;
      delete formSrcCopy.type;

      expect(baseLinter(pageSrcCopy, 'page')).to.deep.equal(result);
      expect(baseLinter(formSrcCopy, 'form')).to.deep.equal(result);
    });

    it('returns mismatch error if page and form json type mismatches passed type', () => {
      const result = {
        isValid: false,
        errors: null,
        message: 'Invalid data source provided - data type and validation type are not matching.',
      };

      expect(baseLinter(pageSrc, 'form')).to.deep.equal(result);
      expect(baseLinter(formSrc, 'page')).to.deep.equal(result);
    });
  });
});
