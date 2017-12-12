const parseErrorMessage = (errors) => {
  if (!errors || !errors.length) return null;

  const message = errors.map((error) => {
    let itemMessage = `${error.dataPath} ${error.message}. In ${error.schemaPath}`;

    if (error.params && error.params.allowedValues) {
      itemMessage += `\n Allowed values: ${error.params.allowedValues.join(', ')}`;
    }

    if (error.params && error.params.type) {
      itemMessage += `\n Should be of type: ${error.params.type}`;
    }

    return itemMessage;
  });

  return message.join('\n\n');
};

const predefinedMessages = {
  valid: 'Provided source is valid.',
  missingType: 'Invalid data source provided - missing "type" property.',
  missingRootType: 'Invalid data source provided - missing "type" property in root.',
  invalidFieldType: 'Invalid data source provided - validation for provided field type is not supported.',
  notImplemented: 'This validation is not implemented yet.',
};

const generatePredefinedMessage = (type) => {
  const result = {
    isValid: false,
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
