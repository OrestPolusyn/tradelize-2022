import vars from "../_vars";

if (vars?.qrBtn > 0) {
  vars.qrBtn.addEventListener('click', () => {
    document?.querySelector('.step-qr-code').classList.add('step-qr-open')
  })
}
