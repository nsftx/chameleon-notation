import utils from '@utils';
import { field, isField } from './field';
import form from './form';
import page from './page';

const { message } = utils;

const parseLintLevel = (type) => {
  let linter;

  switch (type.toLowerCase()) {
    case 'page':
      linter = page;
      break;
    case 'form':
      linter = form;
      break;
    case 'field':
      linter = field;
      break;
    default:
      linter = isField(type) ? field : false;
  }

  return linter;
};

const lint = (item, type) => {
  const itemType = type || item.type;
  if (!itemType) return message('predefined', 'missingRootType');

  const linter = parseLintLevel(itemType);
  if (!linter) return message('predefined', 'invalidFieldType');

  return linter(item);
};

export default {
  lint,
  lintPage: page,
  lintField: field,
  lintForm: form,
};
