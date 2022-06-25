let url = 'https://netology-slow-rest.herokuapp.com/upload.php';
const progress = document.getElementById( 'progress' );

var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();


console.log(xhr);


//progress.value = 0.7;