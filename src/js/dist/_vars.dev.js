"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _windowEl$documentEl$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_windowEl$documentEl$ = {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  navSearchClear: document.querySelectorAll('.nav-search-input'),
  searchClear: document.querySelectorAll('.nav-search-clear'),
  graph: document.querySelector('.graph-visual-box'),
  chart: document.querySelector('.chart-donut-box'),
  graphRadio: document.querySelectorAll('.radio-type'),
  chartRadio: document.querySelectorAll('.chart-type'),
  dropdownBtn: document.querySelectorAll('.btn-dropdown'),
  publishForm: document.querySelector('.publish-form'),
  publishDropdown: document.querySelectorAll('.publish-dropdown'),
  publishDropdownBtn: document.querySelectorAll('.publish-dropdown-btn'),
  publishInput: document.querySelector('.publish-input'),
  publishMaxtext: document.querySelector('.publish-length span'),
  publishSubmit: document.querySelector('.publish-submit'),
  publishReset: document.querySelector('.publish-reset'),
  publishTextarea: document.querySelectorAll('.input:not(.nav-search-input):not(.form-input)'),
  textAreaSettings: document.querySelectorAll('.personal-content'),
  personalAbout: document.querySelector('#personal-about'),
  personalStrategy: document.querySelector('#personal-strategy'),
  apiCheck: document.querySelectorAll('.api-checkbox input'),
  apiBtnNext: document.querySelector('[data-graph-path="add-exchange"]'),
  apiExchangeTitle: document.querySelector('.api-title-exchange'),
  passwordBtns: document.querySelectorAll('.security-password-btn')
}, _defineProperty(_windowEl$documentEl$, "passwordBtns", document.querySelectorAll('.security-password-btn')), _defineProperty(_windowEl$documentEl$, "qrBtn", document.querySelector('.step-qr-show')), _defineProperty(_windowEl$documentEl$, "headerBtn", document.querySelector('.action-dropdown')), _defineProperty(_windowEl$documentEl$, "notificationItems", document.querySelectorAll('.notification-item')), _defineProperty(_windowEl$documentEl$, "commentArea", document.querySelectorAll('.comment-input')), _defineProperty(_windowEl$documentEl$, "postOpenComments", document.querySelectorAll('.post-comments')), _defineProperty(_windowEl$documentEl$, "postReply", document.querySelectorAll('.btn-reply')), _defineProperty(_windowEl$documentEl$, "passShowHide", document.querySelectorAll('.form-pass')), _defineProperty(_windowEl$documentEl$, "copyPurchases", document.querySelectorAll('.purchases-copy-btn')), _defineProperty(_windowEl$documentEl$, "mobileSearch", document.querySelector('.btn-search')), _defineProperty(_windowEl$documentEl$, "mobileSearchForm", document.querySelector('.nav-search-mobile')), _defineProperty(_windowEl$documentEl$, "investRadioBtn", document.querySelectorAll('.invest-tabs-radio .radio-btn')), _defineProperty(_windowEl$documentEl$, "positionsItemBtn", document.querySelectorAll('.positions-btn')), _defineProperty(_windowEl$documentEl$, "replyShowList", document.querySelectorAll('.post-reply-visible')), _windowEl$documentEl$);

exports["default"] = _default;