const trade = document.querySelectorAll('.trade')
const switcherTrade = document.querySelector('.switcher-label')

if ([...trade].length > 0) {
  switcherTrade.addEventListener(
    'click',
    function () {
      trade.forEach((element) => {
        if (element.classList.contains('hidden')) {
          element.classList.remove('hidden')
          setTimeout(function () {
            element.classList.remove('visually-hidden')
          }, 20)
        } else {
          element.classList.add('visually-hidden')
          element.addEventListener(
            'transitionend',
            function (e) {
              element.classList.add('hidden')
            }, {
              capture: false,
              once: true,
              passive: false,
            }
          )
        }
      })
    },
    false
  )
}
