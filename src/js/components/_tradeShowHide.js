const trade = document.querySelectorAll('.trade')
const swhitcherTrade = document.querySelector('.swhitcher-label')

if ([...trade].length > 0) {
  swhitcherTrade.addEventListener(
    'click',
    function () {
      trade.forEach((element) => {
        if (element.classList.contains('hidden')) {
          element.classList.remove('hidden')
          setTimeout(function () {
            element.classList.remove('visuallyhidden')
          }, 20)
        } else {
          element.classList.add('visuallyhidden')
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
