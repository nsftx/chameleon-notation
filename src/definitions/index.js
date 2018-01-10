import _ from 'lodash';
import base from './field-base.json';
import calculation from './field-calculation.json';
import check from './field-check.json';
import date from './field-date.json';
import dateRange from './field-dateRange.json';
import form from './widget-form.json';
import hlist from './container-hlist.json';
import money from './field-money.json';
import number from './field-number.json';
import page from './page.json';
import panel from './container-panel.json';
import radio from './field-radio.json';
import rating from './field-rating.json';
import richText from './field-richText.json';
import select from './field-select.json';
import slider from './field-slider.json';
import toggle from './field-switch.json';
import tags from './field-tags.json';
import text from './field-text.json';
import video from './widget-video.json';
import vlist from './container-vlist.json';

const fields = {
  calculation,
  check,
  date,
  dateRange,
  money,
  number,
  radio,
  rating,
  richText,
  select,
  slider,
  switch: toggle,
  tags,
  text,
};

const widgets = {
  form,
  video,
};

const containers = {
  hlist,
  panel,
  vlist,
};

const items = _.merge({ base, page }, fields, widgets, containers);

export default {
  mapper: {
    calculation: 'http://chameleon-notation/field-calculation.json#',
    check: 'http://chameleon-notation/field-check.json#',
    date: 'http://chameleon-notation/field-date.json#',
    dateRange: 'http://chameleon-notation/field-dateRange.json#',
    form: 'http://chameleon-notation/widget-form.json#',
    hlist: 'http://chameleon-notation/container-hlist.json#',
    money: 'http://chameleon-notation/field-money.json#',
    number: 'http://chameleon-notation/field-number.json#',
    page: 'http://chameleon-notation/page.json#',
    panel: 'http://chameleon-notation/container-panel.json#',
    radio: 'http://chameleon-notation/field-radio.json#',
    rating: 'http://chameleon-notation/field-rating.json#',
    richText: 'http://chameleon-notation/field-richText.json#',
    select: 'http://chameleon-notation/field-select.json#',
    slider: 'http://chameleon-notation/field-slider.json#',
    switch: 'http://chameleon-notation/field-switch.json#',
    tags: 'http://chameleon-notation/field-select.json#',
    text: 'http://chameleon-notation/field-text.json#',
    video: 'http://chameleon-notation/widget-video.json#',
    vlist: 'http://chameleon-notation/container-vlist.json#',
  },
  items,
  fields,
  widgets,
  containers,
};
