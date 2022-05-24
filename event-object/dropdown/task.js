document.querySelector('.dropdown__value').onclick = function (event) {
    //console.log(event);
    event.target.nextElementSibling.classList.toggle('dropdown__list_active');


    };