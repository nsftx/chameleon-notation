import base from './field-base.json';
import text from './field-text.json';
import number from './field-number.json';
import money from './field-money.json';
import richText from './field-richText.json';
import date from './field-date.json';

export default {
  mapper: {
    text: 'http://chameleon-notation/field-text.json#',
    number: 'http://chameleon-notation/field-number.json#',
    money: 'http://chameleon-notation/field-money.json#',
    richText: 'http://chameleon-notation/field-richText.json#',
    date: 'http://chameleon-notation/field-date.json#',
  },
  fields: {
    base,
    text,
    number,
    money,
    richText,
    date,
  },
};
