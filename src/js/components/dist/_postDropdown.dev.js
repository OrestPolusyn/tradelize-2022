"use strict";

var _vars = _interopRequireDefault(require("../_vars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var postBtn = _toConsumableArray(_vars["default"].postDropdownBtn);

if (postBtn.length > 0) {
  postBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      var currentPostBtn = e.currentTarget;
      currentPostBtn.classList.add('post-btn-open');
      currentPostBtn.nextElementSibling.classList.toggle('post-dropdown-open');
    });
  });
  document.querySelectorAll('.post-dropdown-btn').forEach(function (element) {
    element.addEventListener('click', function (e) {
      var currentDropBtn = e.currentTarget;
      currentDropBtn.parentNode.parentNode.classList.remove('post-dropdown-open');
    });
  });
}