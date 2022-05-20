"use strict";

var popcorn = document.querySelector('#popcorn');
var tooltip = document.querySelector('#tooltip');
createPopper(popcorn, tooltip, {
  placement: 'top',
  modifiers: [{
    name: 'offset',
    options: {
      offset: [0, 8]
    }
  }]
});