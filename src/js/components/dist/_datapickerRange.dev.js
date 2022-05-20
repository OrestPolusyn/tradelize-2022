"use strict";

var button = {
  content: 'Done',
  className: 'btn btn-background'
};
var cancel = {
  content: 'Cancel',
  className: 'btn btn-default'
};
var airOptions = {
  range: true,
  locale: localeEn,
  dateFormat: 'dd.MM',
  // inline: true,
  position: function position(_ref) {
    var $datepicker = _ref.$datepicker,
        $target = _ref.$target,
        $pointer = _ref.$pointer,
        done = _ref.done;
    var popper = createPopper($target, $datepicker, {
      modifiers: [{
        name: 'flip',
        options: {
          padding: {
            top: 0
          }
        }
      }, {
        name: 'offset',
        options: {
          offset: [0, 20]
        }
      }, {
        name: 'arrow',
        options: {
          element: $pointer
        }
      }]
    });
    return function completeHide() {
      popper.destroy();
      done();
    };
  },
  navTitles: {
    days: 'MMMM'
  },
  multipleDatesSeparator: " - ",
  buttons: [cancel, button],
  onShow: function onShow() {
    var datepicker = document.querySelector('.air-datepicker');
    datepicker.insertAdjacentHTML('afterbegin', '<ul class="air-datepicker-header"><li class="air-datepicker-item"><button class="air-datepicker-btn" data-range-key="Last 7d" type="button">Last 7d</button></li><li class="air-datepicker-item"><button class="air-datepicker-btn" data-range-key="Last 30d" type="button">Last 30d</button></li><li class="air-datepicker-item"><button class="air-datepicker-btn" data-range-key="Last Year" type="button">Last Year</button></li><li class="air-datepicker-item"><button class="air-datepicker-btn" data-range-key="All Time" type="button">All Time</button></li></ul>');
  }
};
new AirDatepicker('#datepicker', airOptions);