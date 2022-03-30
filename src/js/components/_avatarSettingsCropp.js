if (document.querySelector('#personal-avatar')) {

  document.querySelector('#personal-avatar').addEventListener('change', () => {
    let files = document.getElementById('personal-avatar').files;
    if (!files || !files[0]) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {

      document.getElementById('previewProfileAvatar').src = e.target.result;
      //alert(e.target.result);
      var c = new Croppie(document.getElementById('previewProfileAvatar'), {
        viewport: {
          width: 150,
          height: 150,
          type: 'square'
        },
        boundary: {
          width: 250,
          height: 250
        },
        enableOrientation: true,
        enableExif: true,
      });

      document.querySelectorAll('.btn-cropp').forEach(element => {
        element.addEventListener('click', function () {
          c.result('base64').then(base64 => {
            document.getElementById('personal-avatar-img').src = base64;
          });

          c.destroy()
        });
      });


      return;
      croppie.bind({
        url: e.target.result,
      });
    }
    reader.readAsDataURL(files[0]);
  })
}
