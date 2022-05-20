import vars from '../_vars'

const postBtn = [...vars.dropdownBtn]

if (postBtn.length > 0) {
  postBtn.forEach((element) => {
    element.addEventListener('click', function (e) {
      cleanClass()

      const currentPostBtn = e.currentTarget
      currentPostBtn.classList.toggle('btn-open')
      currentPostBtn.nextElementSibling.classList.toggle('dropdown-open')
    })
  })

  document.querySelector('body').addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn-open')) {
      cleanClass()
    }
  })
}

function cleanClass() {
  document.querySelectorAll('.dropdown-list').forEach(element => {
    element.classList.remove('dropdown-open')
  })

  document.querySelectorAll('.btn-dropdown').forEach(element => {
    element.classList.remove('btn-open')
  })
}
