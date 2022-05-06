const menuLinks = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].onclick = function () {
    if (menuLinks[i].nextElementSibling.find('.menu_sub').length > 0) {
      menuLinks[i].nextElementSibling.classList.toggle('menu_active');
    };
    return false;
  };
};