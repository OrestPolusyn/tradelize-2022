"use strict";

require("./vendor/focus-visible.js");

var _jquery = _interopRequireDefault(require("jquery"));

var _apexcharts = _interopRequireDefault(require("apexcharts"));

var _core = require("@popperjs/core");

var _croppie = _interopRequireDefault(require("croppie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.jQuery = _jquery["default"];
window.$ = _jquery["default"];
window.ApexCharts = _apexcharts["default"];
window.createPopper = _core.createPopper;
window.Croppie = _croppie["default"];