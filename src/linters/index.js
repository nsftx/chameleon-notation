import utils from '@utils';
import { field, isField } from './field';
import { widget, isWidget } from './widget';
import app from './app';
import page from './page';

const { message } = utils;

const parseLintLevel = (type) => {
  let linter;

  switch (type.toLowerCase()) {
    case 'app':
      linter = app;
      break;
    case 'page':
      linter = page;
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
  let itemType = type || item.type;

  if (!itemType) {
    // eslint-disable-next-line
    item.type = 'app';
    itemType = item.type;
  }

  const linter = parseLintLevel(itemType);
  if (!linter) return message('predefined', 'invalidFieldType');

  return linter(item, itemType.toLowerCase());
};

export default {
  lint,
  lintPage: page,
  lintField: field,
  lintForm: page,
};
