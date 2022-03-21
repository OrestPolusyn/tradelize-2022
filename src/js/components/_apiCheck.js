import vars from "../_vars";

const checkItemApi = [...vars.apiCheck]

if (checkItemApi.length > 0) {


  checkItemApi.forEach(element => {
    element.addEventListener('click', () => {
      if (element.checked) {
        const exchangeText = element.nextElementSibling.innerText

        vars.apiBtnNext.disabled = false
        vars.apiExchangeTitle.innerText = exchangeText;
        vars.apiInputTitle.value = exchangeText;
      }
    })
  })
}
