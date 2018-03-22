import _ from 'lodash';
import app from './app.json';
import accordion from './container-accordion.json';
import accordionItem from './container-accordion-item.json';
import base from './field-base.json';
import containersAggr from './containers.json';
import calculation from './field-calculation.json';
import check from './field-check.json';
import checkList from './field-checkList.json';
import date from './field-date.json';
import dateRange from './field-dateRange.json';
import flexgrid from './container-flexgrid.json';
import flexgridItem from './container-flexgrid-item.json';
import form from './widget-form.json';
import hlist from './container-hlist.json';
import html from './widget-html.json';
import list from './widget-list.json';
import map from './widget-map.json';
import money from './field-money.json';
import number from './field-number.json';
import page from './page.json';
import panel from './container-panel.json';
import placeholder from './container-placeholder.json';
import radioList from './field-radioList.json';
import rating from './field-rating.json';
import richText from './field-richText.json';
import select from './field-select.json';
import selectList from './field-selectList.json';
import slider from './field-slider.json';
import tabItem from './container-tab-item.json';
import table from './widget-table.json';
import tabs from './container-tabs.json';
import tags from './field-tags.json';
import toggle from './field-switch.json';
import text from './field-text.json';
import video from './widget-video.json';
import videoStream from './widget-videoStream.json';
import vlist from './container-vlist.json';
import widgetsAggr from './widgets.json';
import youtube from './widget-youtube.json';

const fields = {
  calculation,
  check,
  'check-list': checkList,
  date,
  'date-range': dateRange,
  html,
  list,
  map,
  money,
  number,
  'radio-list': radioList,
  rating,
  'rich-text': richText,
  select,
  'select-list': selectList,
  slider,
  switch: toggle,
  tags,
  text,
};

const widgets = {
  form,
  list,
  map,
  table,
  video,
  videoStream,
  youtube,
};

const containers = {
  accordion,
  accordionItem,
  flexgrid,
  flexgridItem,
  hlist,
  panel,
  placeholder,
  tabItem,
  tabs,
  vlist,
};

const items = _.merge({
  app,
  base,
  containersAggr,
  page,
  widgetsAggr,
}, fields, widgets, containers);

export default {
  mapper: {
    accordion: 'http://chameleon-notation/container-accordion.json#',
    'accordion-item': 'http://chameleon-notation/container-accordion-item.json#',
    app: 'http://chameleon-notation/app.json#',
    containersAggr: 'http://chameleon-notation/containers.json#',
    calculation: 'http://chameleon-notation/field-calculation.json#',
    check: 'http://chameleon-notation/field-check.json#',
    'check-list': 'http://chameleon-notation/field-checkList.json#',
    date: 'http://chameleon-notation/field-date.json#',
    'date-range': 'http://chameleon-notation/field-dateRange.json#',
    flexgrid: 'http://chameleon-notation/container-flexgrid.json#',
    'flexgrid-item': 'http://chameleon-notation/container-flexgrid-item.json#',
    form: 'http://chameleon-notation/widget-form.json#',
    hlist: 'http://chameleon-notation/container-hlist.json#',
    html: 'http://chameleon-notation/widget-html.json#',
    list: 'http://chameleon-notation/widget-list.json#',
    map: 'http://chameleon-notation/widget-map.json#',
    money: 'http://chameleon-notation/field-money.json#',
    number: 'http://chameleon-notation/field-number.json#',
    page: 'http://chameleon-notation/page.json#',
    panel: 'http://chameleon-notation/container-panel.json#',
    placeholder: 'http://chameleon-notation/container-placeholder.json#',
    'radio-list': 'http://chameleon-notation/field-radioList.json#',
    rating: 'http://chameleon-notation/field-rating.json#',
    'rich-text': 'http://chameleon-notation/field-richText.json#',
    select: 'http://chameleon-notation/field-select.json#',
    'select-list': 'http://chameleon-notation/field-selectList.json#',
    slider: 'http://chameleon-notation/field-slider.json#',
    switch: 'http://chameleon-notation/field-switch.json#',
    tabItem: 'http://chameleon-notation/container-tab-item.json#',
    table: 'http://chameleon-notation/widget-table.json#',
    tabs: 'http://chameleon-notation/container-tabs.json#',
    tags: 'http://chameleon-notation/field-tags.json#',
    text: 'http://chameleon-notation/field-text.json#',
    video: 'http://chameleon-notation/widget-video.json#',
    'video-stream': 'http://chameleon-notation/widget-videoStream.json#',
    vlist: 'http://chameleon-notation/container-vlist.json#',
    widgetsAggr: 'http://chameleon-notation/widgets.json#',
    youtube: 'http://chameleon-notation/widget-youtube.json#',
  },
  items,
  fields,
  widgets,
  containers,
};
