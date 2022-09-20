const textarea = document.querySelector("#editor");
const buttonClear = document.querySelector("#buttonClear");
textarea.textContent = localStorage.textarea;

textarea.addEventListener("keydown", () => {
  localStorage.textarea = textarea.value;
});

buttonClear.addEventListener("click", () => {
  textarea.value = "";
  localStorage.clear();
});
