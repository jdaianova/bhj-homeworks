 const popup = document.querySelector("#subscribe-modal");
 const closePopup = document.querySelector(".modal__close");

if (!(document.cookie.includes("popup=wasShowed"))) {
  popup.classList.add("modal_active");
}

closePopup.addEventListener("click", () => {
  popup.classList.remove("modal_active");
  document.cookie = "popup=wasShowed";
});
