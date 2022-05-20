let button = {
  content: 'Done',
  className: 'btn btn-background',
}

let cancel = {
  content: 'Cancel',
  className: 'btn btn-default',
}

let airOptions = {
  range: true,
  locale: localeEn,
  dateFormat: 'dd.MM',
  // inline: true,
  position({
    $datepicker,
    $target,
    $pointer,
    done
  }) {
    let popper = createPopper($target, $datepicker, {
      modifiers: [{
          name: 'flip',
          options: {
            padding: {
              top: 0
            }
          }
        },
        {
          name: 'offset',
          options: {
            offset: [0, 20]
          }
        },
        {
          name: 'arrow',
          options: {
            element: $pointer
          }
        }
      ]
    })

    return function completeHide() {
      popper.destroy();
      done();
    }
  },
  navTitles: {
    days: 'MMMM'
  },
  multipleDatesSeparator: " - ",
  buttons: [cancel, button],
  onShow: () => {
    const datepicker = document.querySelector('.air-datepicker')

    datepicker.insertAdjacentHTML('afterbegin', '<ul class="air-datepicker-header"><li class="air-datepicker-item"><button class="air-datepicker-btn" data-range-key="Last 7d" type="button">Last 7d</button></li><li class="air-datepicker-item"><button class="air-datepicker-btn" data-range-key="Last 30d" type="button">Last 30d</button></li><li class="air-datepicker-item"><button class="air-datepicker-btn" data-range-key="Last Year" type="button">Last Year</button></li><li class="air-datepicker-item"><button class="air-datepicker-btn" data-range-key="All Time" type="button">All Time</button></li></ul>')
  }
}

new AirDatepicker('#datepicker', airOptions)
