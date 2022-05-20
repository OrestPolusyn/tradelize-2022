"use strict";

var _vars = _interopRequireDefault(require("../_vars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var offersBtn = _toConsumableArray(_vars["default"].publishDropdownBtn);

if (offersBtn.length > 0) {
  offersBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.currentTarget.parentNode.classList.toggle('publish-dropdown-open');
    });
  });
  $('.publish-dropdown-radio').find('input').change(function (e) {
    var dropdown = $(this).closest('.publish-dropdown');
    var radioname = $(this).attr('name');

    _vars["default"].publishDropdown.forEach(function (element) {
      element.classList.remove('publish-dropdown-open');
    });

    var checkedtext = $(this).closest('.publish-dropdown-radio').text().trim();
    dropdown.find('.offer-dropdown-input')[0].value = checkedtext;
  });
}