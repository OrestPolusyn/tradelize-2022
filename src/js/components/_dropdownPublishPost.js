import vars from '../_vars'

if (vars?.publishDropdownBtn) {
  vars?.publishDropdownBtn.addEventListener('click', () => {
    vars?.publishDropdown.classList.toggle('publish-dropdown-open')
  })

  $('.publish-dropdown-radio')
    .find('input')
    .change(function () {
      const dropdown = $(this).closest('.publish-dropdown')
      const radioname = $(this).attr('name')
      const checked = 'input[name=' + radioname + ']:checked'

      vars.publishDropdown.classList.remove('publish-dropdown-open')

      const checkedtext = $(checked).closest('.publish-dropdown-radio').text()
      dropdown.find('button').text(checkedtext)
    })
}
