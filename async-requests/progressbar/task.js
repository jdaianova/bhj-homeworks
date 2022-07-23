let url = 'https://netology-slow-rest.herokuapp.com/upload.php';
const progress = document.getElementById( 'progress' );

  function upload(file) {
    let xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded;
    };
  
    xhr.onloadend = function() {
      if (xhr.status == 200) {
        console.log("Успех");
      } else {
        console.log("Ошибка " + this.status);
      }
    };
  
    xhr.open("POST", url);
    xhr.send(file);
  }

  upload(file);