const popup = document.getElementById('modal_main');
const closeLinks = document.querySelectorAll('.modal__close');
const modalPopup = document.getElementById('modal_success');
const successPopup = document.querySelector('.show-success');

successPopup.addEventListener('click', () => {
  modalPopup.classList.add('modal_active');
});

for (let i = 0; i < closeLinks.length; i++) {
  const closeLink = closeLinks[i];
  closeLink.addEventListener('click', () => {
    popupClose(closeLink.closest('.modal'));
  });
};

function popupClose(popupActive) {
  popupActive.classList.remove('modal_active');
};
