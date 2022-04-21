const menuLinks = document.querySelectorAll('.menu__link');
const submenuLinks = document.querySelectorAll('.menu');

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].onclick = function() {
    if (menuLinks[i].nextElementSibling.className.includes('menu')) {
      menuLinks[i].nextElementSibling.classList.add('menu_active');
    };
    return false;
  };
};
