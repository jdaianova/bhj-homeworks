const btn = document.querySelector('#signin__btn');
const form = document.querySelector('#signin__form');

btn.addEventListener('click', (e) => {
    const formData = new FormData(form);
    //const values = [...formData.entries()];
    // console.log(values);
    // let login =formData.get('login');
    // console.log(login);
    // let password =formData.get('password');
    // console.log(password);
    console.log(formData);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);
    console.log('xhr', xhr);

    let a = JSON.parse(xhr.response);
    console.log('parse', a);

    e.preventDefault();
});

  
    // xhr.onloadend = function () {
    //   if (xhr.status == 200) {
    //     console.log("Успех");
    //   } else {
    //     console.log("Ошибка " + this.status);
    //   }
    // };

