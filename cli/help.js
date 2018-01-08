module.exports = () => {
  console.log('\
  usage:\n\
    validate: clint [validate] (-f <file.json>|-d <data>)\n\
    validatePage: clint validatePage (-f <file.json>|-d <data>)\n\
    validateWidget: clint validateWidget (-f <file.json>|-d <data>)\n\
    validateField: clint validateField (-f <file.json>|-d <data>)\n\
    \n\
   options:\n\
    -h    Show this screen.\n\
    -v    Show version.\n\
    -f    Path to json file to validate.\n\
    -d    Raw json to validate.');
};
