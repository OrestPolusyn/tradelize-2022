import vars from '../_vars'

const textAreas = [...vars.publishTextarea]

if (textAreas.length > 0) {
  textAreas.forEach((element) => {
    element.addEventListener('input', autosize)
  })
}

function autosize() {
  var el = this
  setTimeout(function () {
    el.style.cssText = 'height:auto padding:0'
    el.style.cssText = '-moz-box-sizing:content-box'
    el.style.cssText = 'height:' + el.scrollHeight + 'px'
  }, 0)
}
