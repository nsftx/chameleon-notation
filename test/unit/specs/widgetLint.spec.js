import _ from 'lodash';
import { widget as widgetLinter, isWidget } from '@linters/widget';
import predefinedMessages from '@utils/predefinedMessages';
import formSrc from '@examples/form.json';
import videoSrc from '@examples/video.json';

describe('linters', () => {
  describe('widgetLinter', () => {
    it('successfully lints valid widget json', () => {
      const result = {
        isValid: true,
        errors: null,
        message: predefinedMessages.valid,
      };

      expect(widgetLinter(videoSrc)).to.deep.equal(result);
      expect(widgetLinter(formSrc)).to.deep.equal(result);
    });

    it('returns missing type error if widget json does not have type prop', () => {
      const videoSrcCopy = _.clone(videoSrc);
      const formSrcCopy = _.clone(formSrc);
      const result = {
        isValid: false,
        errors: null,
        message: predefinedMessages.missingType,
      };

      delete videoSrcCopy.type;
      delete formSrcCopy.type;

      expect(widgetLinter(videoSrcCopy, 'video')).to.deep.equal(result);
      expect(widgetLinter(formSrcCopy, 'form')).to.deep.equal(result);
    });

    it('returns widget type error if widget json type is not supported in definitions', () => {
      const videoSrcCopy = _.clone(videoSrc);
      const result = {
        isValid: false,
        errors: null,
        message: predefinedMessages.invalidWidgetType,
      };

      videoSrcCopy.type = 'custom';

      expect(widgetLinter(videoSrcCopy)).to.deep.equal(result);
    });

    it('checks if some widget type belongs to widget definitions', () => {
      expect(isWidget('video')).to.be.true;
      expect(isWidget('custom')).to.be.false;
    });
  });
});
