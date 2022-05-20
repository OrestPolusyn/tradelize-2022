import vars from "../_vars";

const radioBtn = [...vars.investRadioBtn]


if (radioBtn.length > 0) {
  radioBtn.forEach(element => {
    const inputData = element.dataset.total.slice(0, -1)
    element.addEventListener('click', () => {
      const calcInputData = +inputData * 1000
      const textInputData = calcInputData.toString().replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1")

      document.querySelector('.invest-result').innerText = textInputData
    })

    if (element.checked) {
      const calcInputData = +inputData * 1000;
      const textInputData = calcInputData.toString().replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1")

      document.querySelector('.invest-result').innerText = textInputData
    }
  })
}
