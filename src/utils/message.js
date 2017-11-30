const parseErrorMessage = (errors) => {
  if (!errors || !errors.length) return null;

  const message = errors.map((error) => {
    let itemMessage = `${error.dataPath} ${error.message}. In ${error.schemaPath}`;

    if (error.params) {
      if (error.params.allowedValues) {
        itemMessage += `\n Allowed values: ${error.params.allowedValues.join(', ')}`;
      }

      if (error.params.type) {
        itemMessage += `\n Should be of type: ${error.params.type}`;
      }
    }

    return itemMessage;
  });

  return message.join('\n\n');
};

const create = (validation, message) => {
  const valid = validation.valid || false;
  const errors = validation.errors || null;
  const defaultMessage = valid ? 'Provided source is valid.' : 'This validation is not implemented yet.';
  const finalMessage = parseErrorMessage(errors) || message || defaultMessage;

  return {
    valid,
    errors,
    message: finalMessage,
  };
};

export default create;
