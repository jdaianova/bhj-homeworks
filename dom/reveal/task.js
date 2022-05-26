const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', itemReveal);

function itemReveal() {
    for (let i = 0; i < reveals.length; i++) {
        const {top, bottom} = reveals[i].getBoundingClientRect();
        if (top > window.innerHeight || bottom < 0) {
            reveals[i].classList.remove('reveal_active');
         } else {
            reveals[i].classList.add('reveal_active');
         } 
    };
};