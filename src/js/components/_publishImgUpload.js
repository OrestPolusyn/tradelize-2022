jQuery(document).ready(function () {
  ImgUpload();
});

function ImgUpload() {
  let imgWrap = "";
  const imgArray = [];

  $(".publish-inputfile").each(function () {
    $(this).on("change", function (e) {
      imgWrap = $(this).closest(".publish-action").find(".publish-img-wrap");
      const maxLength = $(this).attr("data-max-length");

      const files = e.target.files;
      const filesArr = Array.prototype.slice.call(files);
      let iterator = 0;
      filesArr.forEach(function (f, index) {
        if (!f.type.match("image.*")) {
          return;
        }

        if (imgArray.length > maxLength - 1) {
          return false;
        } else {
          let len = 0;
          for (let i = 0; i < imgArray.length; i++) {
            if (imgArray[i] !== undefined) {
              len++;
            }
          }
          if (len > maxLength - 1) {
            return false;
          } else {
            imgArray.push(f);

            const reader = new FileReader();
            reader.onload = function (e) {
              const html =
                "<div class='publish-img-box'><div class='img-bg' style='background-image: url(" +
                e.target.result +
                ")' data-number='" +
                $(".publish-img-close").length +
                "' data-file='" +
                f.name +
                "'><button class='publish-img-close' type='button'></button></div></div>";
              imgWrap.append(html);
              iterator++;
            };
            reader.readAsDataURL(f);
          }
        }
      });
    });
  });

  $("body").on("click", ".publish-img-close", function (e) {
    let file = $(this).parent().data("file");
    for (let i = 0; i < imgArray.length; i++) {
      if (imgArray[i].name === file) {
        imgArray.splice(i, 1);
        break;
      }
    }
    $(this).parent().parent().remove();
  });
}
