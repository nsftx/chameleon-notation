const parseErrorMessage = (errors) => {
  if (!errors || !errors.length) return null;

  const message = errors.map(error => `${error.dataPath} ${error.message}. In ${error.schemaPath}`);
  return message.join('\n\n');
};

const create = (validation, message) => {
  const valid = validation.valid || false;
  const errors = validation.errors || null;
  const defaultMessage = valid ? 'Provided source is valid.' : 'This validation is not implemented yet.';
  const finalMessage = parseErrorMessage(validation.errors) || message || defaultMessage;

  return {
    valid,
    errors,
    message: finalMessage,
  };
};

module.exports = create;
