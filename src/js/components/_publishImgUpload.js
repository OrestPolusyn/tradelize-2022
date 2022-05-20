let imgWrap = "";
const imgArray = [];

$(".publish-inputfile").each(function () {
  $(this).on("change", function (e) {

    imgWrap = $(this).closest(".publish-action").find(".publish-img-wrap");
    const maxLength = $(this).attr("data-max-length");

    document.querySelector('.graph-modal').classList.add("is-open")
    document.querySelector('[data-graph-target="cropp"]').classList.add('graph-modal-open', 'fade', 'animate-open')

    const files = e.target.files;
    const filesArr = Array.prototype.slice.call(files);
    let iterator = 0

    filesArr.forEach(function (f, index) {
      if (!f.type.match("image.*")) {
        return
      }

      if (imgArray.length > maxLength - 1) {
        return false
      } else {
        let len = 0;
        for (let i = 0; i < imgArray.length; i++) {
          if (imgArray[i] !== undefined) {
            len++
          }
        }
        if (len > maxLength - 1) {
          return false
        } else {
          imgArray.push(f)

          const reader = new FileReader()

          reader.addEventListener("load", function (e) {
            window.src = reader.result;
            $('#selectedFile').val('');
          }, false);

          reader.onload = function (e) {

            document.getElementById('previewProfilePicture').src = e.target.result

            const c = new Croppie(document.getElementById('previewProfilePicture'), {
              viewport: {
                width: '80%',
                height: 300,
                type: 'square'
              },
              boundary: {
                width: '100%',
                height: 410
              },
              enableExif: true,
              enableOrientation: true,
            })

            if (document.getElementById('previewProfilePicture')) {
              document.getElementById('done').addEventListener('click', () => {
                c.result('base64').then(base64 => {
                  const html =
                    "<div class='publish-img-box'><div class='img-bg' style='background-image: url(" +
                    base64 +
                    ")' data-number='" +
                    $(".publish-img-close").length +
                    "' data-file='" +
                    f.name +
                    "'><button class='publish-img-close' type='button'></button></div></div>"
                  imgWrap.append(html)
                  iterator++
                })
                c.destroy();

                document.getElementById('previewProfilePicture').src = ''
                document.querySelector('.graph-modal').classList.remove("is-open")
                document.querySelector('[data-graph-target="cropp"]').classList.remove('graph-modal-open', 'fade', 'animate-open')

              })

            }

            document.querySelectorAll('.graph-modal-close').forEach(element => {
              element.addEventListener('click', () => {
                c.destroy();
                document.querySelector('.graph-modal').classList.remove("is-open")
                document.querySelector('[data-graph-target="cropp"]').classList.remove('graph-modal-open', 'fade', 'animate-open')
                document.getElementById('previewProfilePicture').src = ''
              })
            });

          }


          reader.readAsDataURL(f)
        }
      }
    })
  })
})

$("body").on("click", ".publish-img-close", function (e) {
  let file = $(this).parent().data("file")
  for (let i = 0; i < imgArray.length; i++) {
    if (imgArray[i].name === file) {
      imgArray.splice(i, 1)
      break
    }
  }
  $(this).parent().parent().remove()
})
