import vars from '../_vars'

const offersBtn = [...vars.publishDropdownBtn]

if (offersBtn.length > 0) {

  offersBtn.forEach(element => {
    element.addEventListener('click', (e) => {

      e.currentTarget.parentNode.classList.toggle('publish-dropdown-open')
    })
  })

  $('.publish-dropdown-radio')
    .find('input')
    .change(function (e) {
      const dropdown = $(this).closest('.publish-dropdown')
      const radioname = $(this).attr('name')

      vars.publishDropdown.forEach(element => {
        element.classList.remove('publish-dropdown-open')
      })

      const checkedtext = $(this).closest('.publish-dropdown-radio').text().trim()
      dropdown.find('.offer-dropdown-input')[0].value = checkedtext

    })
}
