import vars from "../_vars";

const postReply = [...vars.postReply]

if (postReply.length > 0) {

  postReply.forEach(element => {
    element.addEventListener('click', function (e) {
      const commentReply = this.closest('[data-reply]').dataset.reply

      const textForm = element.closest('.post').querySelector('.comment-input')

      textForm.value = commentReply + ' '
      textForm.focus()
    })
  })
}
