import _ from 'lodash';
import base from './field-base.json';
import text from './field-text.json';
import number from './field-number.json';
import money from './field-money.json';
import richText from './field-richText.json';
import date from './field-date.json';
import dateRange from './field-dateRange.json';
import form from './widget-form.json';
import page from './page.json';

const fields = {
  text,
  number,
  money,
  richText,
  date,
  dateRange,
};

const widgets = {
  form,
};

const items = _.merge({ base, page }, fields, widgets);

export default {
  mapper: {
    text: 'http://chameleon-notation/field-text.json#',
    number: 'http://chameleon-notation/field-number.json#',
    money: 'http://chameleon-notation/field-money.json#',
    richText: 'http://chameleon-notation/field-richText.json#',
    date: 'http://chameleon-notation/field-date.json#',
    dateRange: 'http://chameleon-notation/field-dateRange.json#',
    form: 'http://chameleon-notation/widget-form.json#',
    page: 'http://chameleon-notation/page.json#',
  },
  items,
  fields,
  widgets,
};
