import vars from '../_vars'

const postBtn = [...vars.postDropdownBtn]

if (postBtn.length > 0) {
  postBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
      const currentPostBtn = e.currentTarget
      currentPostBtn.classList.add('post-btn-open')
      currentPostBtn.nextElementSibling.classList.toggle('post-dropdown-open')
    })
  })

  document.querySelectorAll('.post-dropdown-btn').forEach(element => {
    element.addEventListener('click', (e) => {
      const currentDropBtn = e.currentTarget
      currentDropBtn.parentNode.parentNode.classList.remove('post-dropdown-open')
    })
  })
}
