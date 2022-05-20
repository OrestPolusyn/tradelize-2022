"use strict";

var _vars = _interopRequireDefault(require("../_vars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var radioBtn = _toConsumableArray(_vars["default"].investRadioBtn);

if (radioBtn.length > 0) {
  radioBtn.forEach(function (element) {
    var inputData = element.dataset.total.slice(0, -1);
    element.addEventListener('click', function () {
      var calcInputData = +inputData * 1000;
      var textInputData = calcInputData.toString().replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1");
      document.querySelector('.invest-result').innerText = textInputData;
    });

    if (element.checked) {
      var calcInputData = +inputData * 1000;
      var textInputData = calcInputData.toString().replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1");
      document.querySelector('.invest-result').innerText = textInputData;
    }
  });
}