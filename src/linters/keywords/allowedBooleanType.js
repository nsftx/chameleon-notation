// Custom keyword for allowing only one of the boolean values

export default {
  name: 'cn-allowedBooleanType',
  definition: {
    validate: function myValidation(schema, data) {
      const dataType = typeof data;
      if (dataType !== 'boolean') return true;

      const result = schema === data;

      if (!result) {
        if (myValidation.errors === null) myValidation.errors = [];

        myValidation.errors.push({
          keyword: 'cn-allowedBooleanType',
          message: `when type is boolean, allowed value is ${schema}`,
          params: {
            keyword: 'cn-allowedBooleanType',
          },
        });
      }

      return result;
    },
  },
};
