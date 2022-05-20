import vars from "../_vars";

if (vars?.headerBtn) {
  vars.headerBtn.addEventListener('click', () => {
    console.log("click");
    document?.querySelector('.dropdown').classList.toggle('dropdown-open')
  })
}
