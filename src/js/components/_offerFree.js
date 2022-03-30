document?.querySelector('#switch-cost').addEventListener('click', () => {
  if (document.querySelector('#switch-cost').checked) {
    document.querySelector('.offer-input.input').disabled = true
  } else {
    document.querySelector('.offer-input.input').disabled = false
  }
})
