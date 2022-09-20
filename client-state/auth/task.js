if (localStorage.getItem('id') != null) {
    showWelcomeUser(localStorage.getItem('id'));
};

const btn = document.querySelector("#signin__btn");
const formAuth = document.querySelector("#signin__form");
const url = "https://netology-slow-rest.herokuapp.com/auth.php";

btn.addEventListener('click', (e) => {
    const formData = new FormData(formAuth);
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("POST", url);
    xhr.onload = () => {
        if (xhr.response.success == true) {
            localStorage.setItem('id', xhr.response.user_id);
            showWelcomeUser(xhr.response.user_id)
        } else {
            alert('Неверный логин/пароль');
        };
    };
    xhr.open("POST", url);
    xhr.send(formData);

    e.preventDefault();
});

function showWelcomeUser(id) {
    document.querySelector('.signin').classList.remove('signin_active');
    document.querySelector('.welcome').classList.add('welcome_active');
    document.querySelector('#user_id').textContent = id;
};