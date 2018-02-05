import pageSrc from '@examples/page.json';
import formSrc from '@examples/form.json';
import fieldSrc from '@examples/field.json';
import linter from '@linters';
import * as page from '@linters/page';
import * as field from '@linters/field';
import * as widget from '@linters/widget';

describe('linters', () => {
  describe('mainLinter', () => {
    it('calls page linter', () => {
      const pageMock = sinon.spy(page, 'default');
      linter.lint(pageSrc);
      linter.lint(pageSrc, 'page');

      expect(pageMock).to.have.been.calledTwice;
      expect(pageMock).to.always.have.been.calledWith(pageSrc, 'page');
      pageMock.restore();
    });

    it('calls widget linter', () => {
      const widgetMock = sinon.spy(widget, 'widget');
      linter.lint(formSrc);
      linter.lint(formSrc, 'form');

      expect(widgetMock).to.have.been.calledTwice;
      expect(widgetMock).to.always.have.been.calledWith(formSrc, 'form');
      widgetMock.restore();
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
