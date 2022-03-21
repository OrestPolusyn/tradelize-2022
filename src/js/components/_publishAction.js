import vars from '../_vars'

const publishText = vars?.publishInput

if (vars?.publishInput) {
  publishText.addEventListener('keyup', () => {
    const textLength = publishText.value.length

    vars.publishMaxtext.innerText = 1000 - textLength

    if (textLength > 0) {
      vars.publishSubmit.disabled = false
    } else {
      vars.publishSubmit.disabled = true
    }
  })

  vars?.publishReset.addEventListener('click', () => {
    vars.publishMaxtext.innerText = 1000
    vars.publishSubmit.disabled = true
    vars.publishDropdown.classList.remove('publish-dropdown-open')
    document.querySelector('.publish-img-wrap').innerHTML = ''
    vars.publishForm.classList.remove('publish-form-open')
  })

  vars.bodyEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('publish-input')) {
      vars.publishForm.classList.add('publish-form-open')
    }
  })
}
