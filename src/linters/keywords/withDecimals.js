// Custom keyword for number/integer differentiation

export default {
  name: 'cn-withDecimals',
  definition: {
    validate: function myValidation(schema, data) {
      const result = !schema ? data === parseInt(data, 10) : true;

      if (!result) {
        if (myValidation.errors === null) myValidation.errors = [];

        myValidation.errors.push({
          keyword: 'cn-withDecimals',
          message: 'no decimal points are allowed',
          params: {
            keyword: 'cn-withDecimals',
          },
        });
      }

      return result;
    },
  },
};
