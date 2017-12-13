import pageSrc from '@examples/page.json';
import formSrc from '@examples/form.json';
import fieldSrc from '@examples/field.json';
import linter from '@linters';
import * as base from '@linters/base';
import * as field from '@linters/field';

describe('linters', () => {
  describe('mainLinter', () => {
    it('calls page linter', () => {
      const baseMock = sinon.spy(base, 'default');
      linter.lint(pageSrc);
      linter.lint(pageSrc, 'page');

      expect(baseMock).to.have.been.calledTwice;
      expect(baseMock).to.always.have.been.calledWith(pageSrc, 'page');
      baseMock.restore();
    });

    it('calls form linter', () => {
      const baseMock = sinon.spy(base, 'default');
      linter.lint(formSrc);
      linter.lint(formSrc, 'form');

      expect(baseMock).to.have.been.calledTwice;
      expect(baseMock).to.always.have.been.calledWith(formSrc, 'form');
      baseMock.restore();
    });

    it('calls field linter when type passed', () => {
      const lintMock = sinon.spy(field, 'field');
      linter.lint(fieldSrc, 'field');

      expect(lintMock).to.have.been.calledWith(fieldSrc, 'field');
      lintMock.restore();
    });

    it('calls field linter when type is not passed', () => {
      const lintMock = sinon.spy(field, 'field');
      linter.lint(fieldSrc);

      expect(lintMock).to.have.been.calledWith(fieldSrc, 'text');
    });
  });
});
