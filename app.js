(function() {
  'use strict';

  document.getElementById('fahrenheitInput').addEventListener('input', function(event) {
    celsiusInput.value=((this.value - 32) / 1.8).toFixed(2);
  });

  document.getElementById('celsiusInput').addEventListener('input', function(event) {
    fahrenheitInput.value=((this.value * 1.8) + 32).toFixed(2);
  });
  document.getElementById("image-file").addEventListener("change", function(e) {
    const file = e.target.files[0];
  
    // Only process image files.
    if (!file.type.match('image.*')) {
        return false;
    }
  
    const reader = new FileReader();
    reader.onload = (function(theFile) {
        return function(e) {
            const imgElm = document.getElementById("preview-image");
            imgElm.src = e.target.result;
        }    
    })(file);
  
    // Read in the image file as a data URL.
    reader.readAsDataURL(file);
  
  }, false);
  
  
  //プレビュー画像をクリックしたら、「別タブウィンドウで開く」イベントを設定
  document.getElementById("preview-image").addEventListener("click", function(e) {
    const imgElm = e.target;
    window.open(imgElm.src);
  }, false);

})();
