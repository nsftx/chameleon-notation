import utils from '@utils';
import { field, isField } from './field';
import { widget, isWidget } from './widget';
import base from './base';

const { message } = utils;

const parseLintLevel = (type) => {
  let linter;

  switch (type.toLowerCase()) {
    case 'page':
      linter = base;
      break;
    case 'widget':
      linter = widget;
      break;
    case 'field':
      linter = field;
      break;
    default:
      if (isWidget(type)) {
        linter = widget;
      } else {
        linter = isField(type) ? field : false;
      }
  }

  return linter;
};

const lint = (item, type) => {
  const itemType = type || item.type;
  if (!itemType) return message('predefined', 'missingRootType');

  const linter = parseLintLevel(itemType);
  if (!linter) return message('predefined', 'invalidFieldType');

  return linter(item, itemType.toLowerCase());
};

export default {
  lint,
  lintPage: base,
  lintField: field,
  lintForm: base,
};
