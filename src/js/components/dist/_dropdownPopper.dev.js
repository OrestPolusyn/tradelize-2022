"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var notItems = _toConsumableArray(document.querySelectorAll('.table-more'));

if (notItems.length > 0) {
  notItems.forEach(function (element) {
    var popcorn = element.querySelector('.popcorn');
    var tooltip = element.querySelector('.poptip');
    if (popcorn && tooltip) createPopper(popcorn, tooltip, {
      placement: 'left-start',
      modifiers: [{
        name: 'offset',
        options: {
          offset: [10, 0]
        }
      }]
    });
  });
}