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

const create = (validation, message) => {
  const isValid = validation.isValid || false;
  const errors = validation.errors || null;
  const defaultMessage = isValid ? 'Provided source is valid.' : 'This validation is not implemented yet.';
  const finalMessage = parseErrorMessage(errors) || message || defaultMessage;

  return {
    isValid,
    errors,
    message: finalMessage,
  };
};

export default create;
