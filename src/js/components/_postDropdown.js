import vars from '../_vars'

const postBtn = [...vars.postDropdownBtn]

if (postBtn.length > 0) {
  postBtn.forEach((element) => {
    element.addEventListener('click', function (e) {
      cleanClass()

      const currentPostBtn = e.currentTarget
      currentPostBtn.classList.toggle('post-btn-open')
      currentPostBtn.nextElementSibling.classList.add('post-dropdown-open')
    })
  })

  document.querySelector('body').addEventListener('click', (e) => {
    e.target.parentNode.parentNode.classList.remove('post-dropdown-open')

    if (!e.target.classList.contains('post-btn'))
      cleanClass()
  })
}

function cleanClass() {
  document.querySelectorAll('.post-dropdown').forEach(element => {
    element.classList.remove('post-dropdown-open')
  })

  document.querySelectorAll('.post-btn').forEach(element => {
    element.classList.remove('post-btn-open')
  })
}
