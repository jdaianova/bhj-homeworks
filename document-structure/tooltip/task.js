const linksTooltips = document.querySelectorAll(".has-tooltip");
const body = document.querySelector("body");
var previousTipText;

// создание массива всех подсказок
linksTooltips.forEach((element) => {
  const htmlElement = `
    <div class="tooltip" style="left: 0; top: 0">${element.title.trim()}</div>`;
  let tooltipElement = new DOMParser()
    .parseFromString(htmlElement, "text/html")
    .querySelector(".tooltip");
  body.appendChild(tooltipElement);
});
const tooltips = document.querySelectorAll(".tooltip");

//обработчик клика по ссылке на подсказку
linksTooltips.forEach((tip) => {
  tip.addEventListener("click", (e) => {
    //нахождение объекта предыдущего клика
    linksTooltips.forEach((tip) => {
      if (tip.classList.contains("clicked")) {
        previousTipText = tip.title;
        tip.classList.remove("clicked");
      }
    });

    //текущий клик
    tip.classList.add("clicked");
    //сравнение содержимого предыдущего и текущего клика
    if (previousTipText == tip.title) {
      //нахожждение соответствующей подсказки по тексту+toggle
      tooltips.forEach((element) => {
        if (element.innerText == tip.title) {
          element.classList.toggle("tooltip_active");
        }
      });
    } else {
      var position = tip.getBoundingClientRect();
      tooltips.forEach((element) => {
        if (element.innerText == tip.title) {
          element.classList.add("tooltip_active");
          element.style.left = position.left;
          element.style.top = position.bottom;
        }
      });
    }

    e.preventDefault();
  });
});
