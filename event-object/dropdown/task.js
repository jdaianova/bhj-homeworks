const mainMenu = document.querySelector('.dropdown__value');

mainMenu.addEventListener ('click', () => {

    mainMenu.nextElementSibling.classList.toggle('dropdown__list_active');

    const submenuLinks = mainMenu.nextElementSibling.childNodes;

    for (let i = 0; i < submenuLinks.length; i++) {
        submenuLinks[i].addEventListener('click', () => {
            mainMenu.innerText = submenuLinks[i].innerText;
            return false;
        });        
    }

});

