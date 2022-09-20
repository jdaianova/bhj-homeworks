let url = "https://netology-slow-rest.herokuapp.com/upload.php";
const progress = document.getElementById("progress");
const btnSubmit = document.querySelector("#send");

btnSubmit.onclick = () => {
  upload(file);
};

function upload(file) {
  let xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded;
    console.log(xhr);
  };

  xhr.onloadend = function () {
    if (xhr.status == 200) {
      console.log("Успех");
    } else {
      console.log("Ошибка " + this.status);
    }
  };

  xhr.open("POST", url);
  xhr.send(file);
}
