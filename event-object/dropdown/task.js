const mainMenu = document.querySelector('.dropdown__value');

mainMenu.addEventListener ('click', () => {

    mainMenu.nextElementSibling.classList.add('dropdown__list_active');

    const submenuLinks = mainMenu.nextElementSibling.childNodes;

    for (let i = 0; i < submenuLinks.length; i++) {
        submenuLinks[i].addEventListener('click', (e) => {
            e.preventDefault();
            mainMenu.innerText = submenuLinks[i].innerText;
            mainMenu.nextElementSibling.classList.remove('dropdown__list_active');
        });        
    }

});

