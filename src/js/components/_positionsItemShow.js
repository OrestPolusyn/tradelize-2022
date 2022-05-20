import vars from "../_vars";

const positionsItemBtn = [...vars.positionsItemBtn]


if (positionsItemBtn.length > 0) {
  positionsItemBtn.forEach(element => {
    element.addEventListener('click', () => {
      element.closest('.positions-item').classList.toggle('positions-open')
    })
  })
}
