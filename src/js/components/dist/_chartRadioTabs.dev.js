"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var radioChart = _toConsumableArray(document.querySelectorAll('.chart-tabs .radio'));

var radioChartContent = _toConsumableArray(document.querySelectorAll('.chart-donut'));

if (radioChart.length > 0) {
  radioChart.forEach(function (element) {
    element.addEventListener('change', function () {
      var target = element.dataset.chart;
      radioChartContent.forEach(function (element) {
        element.classList.remove('chart-donut-active');
      });
      document.querySelectorAll("[data-chart-target=\"".concat(target, "\"]")).forEach(function (element) {
        element.classList.add('chart-donut-active');
      });
    });
  });
}