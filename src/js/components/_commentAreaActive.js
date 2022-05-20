import vars from "../_vars";

const commentArea = [...vars.commentArea]

if (commentArea.length > 0) {
  commentArea.forEach(element => {
    element.addEventListener('input', () => {
      if (element.value.length > 0) {
        element.nextElementSibling.classList.add('send')
      } else {
        element.nextElementSibling.classList.remove('send')
      }
    })
  })
}
