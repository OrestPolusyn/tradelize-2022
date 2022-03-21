import vars from '../_vars'

const settingsAbout = [...vars?.textAreaSettings]

if (settingsAbout.length > 0) {

  settingsAbout.forEach(element => {
    element.addEventListener('keyup', () => {

      const textAreaPersonal = +element.value.length;

      if (+element.value.length >= 100) {
        element.nextElementSibling.querySelector('span').innerText = 0;
      } else {
        element.nextElementSibling.querySelector('span').innerText = 100 - textAreaPersonal;
      }

      if (vars.personalAbout.value.length >= 100 && vars.personalStrategy.value.length >= 100) {
        vars.personalBtn.disabled = false
      } else {
        vars.personalBtn.disabled = true
      }

      if (vars.personalAbout.value.length >= 1 || vars.personalStrategy.value.length >= 1) {
        vars.personalBtn.classList.add('personal-submit-show')
      } else {
        vars.personalBtn.classList.remove('personal-submit-show')
      }
    })
  });
}
