const urlRates = "https://netology-slow-rest.herokuapp.com";

function getRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => {
    callback(xhr.responseText);
  };
  xhr.send();
}

function getExchangeRates(response) {
  document.querySelector("#loader").classList.remove("loader_active");
  const valutes = Object.values(JSON.parse(response).response.Valute);

  const htmlElement = `
  ${valutes
    .map(
      (valute) => `
  <div class="item">
    <div class="item__code">
        ${valute.CharCode}
    </div>
    <div class="item__value">
        ${valute.Value}
    </div>
    <div class="item__currency">
        руб.
    </div>
  </div>
    `
    )
    .join("")}`;

  document.querySelector("#items").innerHTML = htmlElement;
}

getRequest(urlRates, getExchangeRates);
