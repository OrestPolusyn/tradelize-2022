import vars from "../_vars";

if (vars?.qrBtn) {
  vars.qrBtn.addEventListener('click', () => {
    document?.querySelector('.step-qr-code').classList.add('step-qr-open')
  })
}
