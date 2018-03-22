import _ from 'lodash';
import predefinedMessages from './predefinedMessages';

const generatePredefinedMessage = (type) => {
  const result = {
    isValid: false,
    errors: null,
    message: predefinedMessages[type],
  };

  return result;
};

// Get error keys from deepest level
const getDeepestError = (errors) => {
  const keys = _.keys(errors).sort((a, b) => b.length - a.length);
  if (!keys.length) return [];

  const firstKeyLevel = keys[0].split('.').length;
  return _.filter(keys, key => key.split('.').length === firstKeyLevel);
};

const handleSingleErrorGroup = (errorGroup) => {
  let msg = '';
  let paramName = '';
  let msgs = _.map(errorGroup, (item) => {
    if (item.keyword === 'type') {
      paramName = 'type(s)';
      return item.params.type;
    }

    paramName = 'value(s)';
    return item.params.allowedValues;
  });

  msgs = _.flatMap(msgs);
  msgs = _.uniq(msgs);
  msg = `Error in ${errorGroup[0].dataPath}. ${errorGroup[0].message}. \nAllowed ${paramName}: ${msgs.join(', ')}`;

  return msg;
};

const handleErrorGroups = (groups) => {
  let msg = '';
  let baseErrorKey;
  const keysToHandle = getDeepestError(groups);
  const errors = groups;

  // Handle single error on level
  if (keysToHandle.length === 1) {
    return handleSingleErrorGroup(errors[keysToHandle[0]]);
  }

  _.each(errors, (group, key) => {
    if (keysToHandle.indexOf(key) < 0) return;

    // Handle special cases when we don't have error prop in path
    if (key.endsWith(']')) {
      const elIdentifier = group[0].data.name;
      const elPath = group[0].dataPath;

      baseErrorKey = key;
      if (group[0].keyword !== 'oneOf') {
        msg += `Error in ${elIdentifier} (${elPath}). - ${group[0].message}.\n`;
      }
    }
  });

  delete errors[baseErrorKey];

  // Handle other errors found on same path level
  _.each(errors, (group, key) => {
    if (group.length > 2 || keysToHandle.indexOf(key) < 0) return;
    const error = group[0];

    msg += `Wrong ${error.keyword} in ${error.dataPath}. ${error.message}`;

    if (error.params && error.params.type) {
      msg += `\nAllowed type(s): ${error.params.type}.\n`;
    } else if (error.params && error.params.allowedValues) {
      msg += `\nAllowed value(s): ${error.params.allowedValues}.\n`;
    }
  });

  return msg;
};

const generateFullMessage = (validation, message) => {
  const isValid = validation.isValid || false;
  const errors = validation.errors || null;
  const defaultMessage = isValid ? predefinedMessages.valid : predefinedMessages.notImplemented;
  const finalMessage = handleErrorGroups(_.groupBy(validation.errors, 'dataPath')) || message || defaultMessage;

  return {
    isValid,
    errors,
    message: finalMessage,
  };
};

const create = (validation, message) => {
  if (validation === 'predefined') return generatePredefinedMessage(message);

  return generateFullMessage(validation, message);
};

export default create;
