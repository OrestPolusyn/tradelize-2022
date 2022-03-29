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
  graph: document.querySelector('.graph-visual-box'),
  chart: document.querySelector('.chart-visual-box'),
  graphRadio: document.querySelectorAll('.radio-type'),
  chartRadio: document.querySelectorAll('.chart-type'),
  postDropdownBtn: document.querySelectorAll('.post-btn'),
  publishForm: document.querySelector('.publish-form'),
  publishDropdown: document.querySelector('.publish-dropdown'),
  publishDropdownBtn: document.querySelector('.publish-dropdown-btn'),
  publishInput: document.querySelector('.publish-input'),
  publishMaxtext: document.querySelector('.publish-length span'),
  publishSubmit: document.querySelector('.publish-submit'),
  publishReset: document.querySelector('.publish-reset'),
  publishTextarea: document.querySelectorAll('.input'),
  textAreaSettings: document.querySelectorAll('.personal-content'),
  personalBtn: document.querySelector('.personal-submit'),
  personalAbout: document.querySelector('#personal-about'),
  personalStrategy: document.querySelector('#personal-strategy'),
  apiCheck: document.querySelectorAll('.api-checkbox input'),
  apiBtnNext: document.querySelector('[data-graph-path="add-exchange"]'),
  apiExchangeTitle: document.querySelector('.api-title-exchange'),
  apiInputTitle: document.querySelector('.api-input-exchange'),
  passwordBtns: document.querySelectorAll('.security-password-btn')
}, _defineProperty(_windowEl$documentEl$, "passwordBtns", document.querySelectorAll('.security-password-btn')), _defineProperty(_windowEl$documentEl$, "qrBtn", document.querySelector('.step-qr-show')), _defineProperty(_windowEl$documentEl$, "headerBtn", document.querySelector('.action-dropdown')), _defineProperty(_windowEl$documentEl$, "notificationItems", document.querySelectorAll('.notification-item')), _windowEl$documentEl$);

exports["default"] = _default;