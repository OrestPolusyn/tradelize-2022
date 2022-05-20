import vars from "../_vars";

const clearInput = [...vars.navSearchClear]
const clearBtn = [...vars.searchClear]

if (clearInput.length > 0) {
  clearInput.forEach(element => {
    element.addEventListener('input', function (e) {

      if (this.value.length > 0) {
        this.nextElementSibling.classList.add('clear')
      } else {
        clearBtn.forEach(item => {
          item.classList.remove('clear')
        })
      }
    })
  })

  clearBtn.forEach(element => {
    element.addEventListener('click', function (e) {
      this.classList.remove('clear')
    })
  })
}
