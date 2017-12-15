import predefinedMessages from './predefinedMessages';

const parseErrorMessage = (errors) => {
  if (!errors || !errors.length) return null;

  const message = errors.map((error) => {
    let itemMessage = `${error.dataPath} ${error.message}. In ${error.schemaPath}`;

    if (error.params && error.params.allowedValues) {
      const allowedValues = error.params.allowedValues.map(item => String(item));
      itemMessage += `\n Allowed values: ${allowedValues.join(', ')}`;
    }

    if (error.params && error.params.type) {
      itemMessage += `\n Should be of type: ${error.params.type}`;
    }

    return itemMessage;
  });

  return message.join('\n\n');
};

const generatePredefinedMessage = (type) => {
  const result = {
    isValid: false,
    errors: null,
    message: predefinedMessages[type],
  };

  return result;
};

const generateFullMessage = (validation, message) => {
  const isValid = validation.isValid || false;
  const errors = validation.errors || null;
  const defaultMessage = isValid ? predefinedMessages.valid : predefinedMessages.notImplemented;
  const finalMessage = parseErrorMessage(errors) || message || defaultMessage;

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
