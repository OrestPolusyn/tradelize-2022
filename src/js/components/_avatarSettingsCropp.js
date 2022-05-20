if (document.querySelector('#personal-avatar')) {

  document.querySelector('#personal-avatar').addEventListener('change', () => {
    let files = document.getElementById('personal-avatar').files;
    if (!files || !files[0]) {
      return;
    }

    document.querySelector('.graph-modal').classList.add("is-open")
    document.querySelector('[data-graph-target="cropp-avatar"]').classList.add('graph-modal-open', 'fade', 'animate-open')

    var reader = new FileReader();
    reader.onload = function (e) {

      document.getElementById('previewProfileAvatar').src = e.target.result;
      var c = new Croppie(document.getElementById('previewProfileAvatar'), {
        viewport: {
          width: 150,
          height: 150,
          type: 'square'
        },
        boundary: {
          width: '100%',
          height: 250
        },
        enableOrientation: true,
        enableExif: true,
      });

      if (document.getElementById('personal-avatar-img')) {
        document.querySelectorAll('#done-avatar').forEach(element => {
          element.addEventListener('click', function () {
            c.result('base64').then(base64 => {
              document.getElementById('personal-avatar-img').src = base64;
            });

            c.destroy()
          });
        });
      }

      document.querySelectorAll('.graph-modal-close').forEach(element => {
        element.addEventListener('click', () => {
          document.querySelector('.graph-modal').classList.remove("is-open")
          document.querySelector('[data-graph-target="cropp-avatar"]').classList.remove('graph-modal-open', 'fade', 'animate-open')

          c.destroy()
        })
      });

      return;
      croppie.bind({
        url: e.target.result,
      });
    }
    reader.readAsDataURL(files[0]);
  })
}
