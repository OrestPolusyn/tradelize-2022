import vars from '../_vars'

const passBtns = [...vars.passShowHide]

if (passBtns.length > 0) {
  passBtns.forEach(element => {
    element.addEventListener('click', (e) => {
      const passBtn = e.currentTarget
      passBtn.classList.toggle('form-text')

      if (passBtn.previousElementSibling.querySelector('.form-input').type === 'password') {
        passBtn.previousElementSibling.querySelector('.form-input').type = 'text'
      } else {
        passBtn.previousElementSibling.querySelector('.form-input').type = 'password'
      }
    })
  })
}
