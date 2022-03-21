import vars from "../_vars";

const passBtns = [...vars.passwordBtns]

if (passBtns.length > 0) {
  passBtns.forEach(element => {
    element.addEventListener('click', (e) => {
      const elBtn = e.currentTarget;

      const type = elBtn.previousElementSibling.getAttribute('type') === 'password' ? 'text' : 'password';
      elBtn.previousElementSibling.setAttribute('type', type);
    })
  })
}
