const loader = document.querySelector("#loader");
let url = "https://netology-slow-rest.herokuapp.com";
const items = document.querySelector("#items");

let request = new XMLHttpRequest();
request.open("GET", url);
request.send();
request.onload = () => {
  loader.classList.remove("loader_active");
  var data = JSON.parse(request.responseText);
  const valutes = Object.values(data.response.Valute);

  valutes.forEach((element) => {
    const item = document.createElement("div");
    const itemCode = document.createElement("div");
    const itemValue = document.createElement("div");
    const itemCurrency = document.createElement("div");

    items.appendChild(item);
    item.appendChild(itemCode);
    item.appendChild(itemValue);
    item.appendChild(itemCurrency);

    itemCode.innerHTML = element.CharCode;
    itemValue.innerHTML = element.Value;
    itemCurrency.innerHTML = "руб.";

    item.classList.add("item");
    itemCode.classList.add("item__code");
    itemValue.classList.add("item__value");
    itemCurrency.classList.add("item__currency");
  });
};
