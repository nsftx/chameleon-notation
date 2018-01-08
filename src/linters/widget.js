import definitions from '@definitions';
import utils from '@utils';
import schemaLint from './schemaLint';

const { widgets } = definitions;
const { message } = utils;

const lint = (item) => {
  const widgetType = item.type;
  if (!widgetType) return message('predefined', 'missingType');

  const schema = widgets[widgetType];
  if (!schema) return message('predefined', 'invalidWidgetType');

  const validation = schemaLint(item, widgetType);

  return message({
    isValid: validation.isValid,
    errors: validation.errors,
  });
};

const belongs = type => !!widgets[type];

export { lint as widget, belongs as isWidget };
