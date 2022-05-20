import vars from "../_vars";

const postBtnComment = [...vars.postOpenComments];
const replyShowList = [...vars.replyShowList];


if (postBtnComment.length > 0) {
  postBtnComment.forEach(element => {
    element.addEventListener('click', function (e) {
      const postThis = this.closest('.post');

      postThis.classList.toggle('post-replies')
    })
  })
}


if (replyShowList.length > 0) {
  replyShowList.forEach(element => {
    element.addEventListener('click', function (e) {
      const postThis = this.closest('.post-reply-item');

      postThis.classList.toggle('post-replies-more')
    })
  })
}
