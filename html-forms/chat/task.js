const messages = document.querySelector(".chat-widget__messages");
let answers = [
  'Подождите, мы обедаем!',
  'Мы ещё не проснулись. Позвоните через 10 лет',
  'Кто здесь?',
  'Все операторы заняты, не пишите нам!',
  'До свидания!',
  'Напишите нам завтра!',
  'Как ваши дела?',
  'Мы ничего не будем вам продавать!',
];

document.querySelector(".chat-widget").onclick = () => {
  document.querySelector(".chat-widget").classList.add("chat-widget_active");
};

document.getElementById("chat-widget__input").onkeydown = function (e) {

  //сообщение, введенное пользователем
  let clientMassage = document.querySelector("input").value;

  if (e.code == "Enter" && clientMassage != '') {

    //функция текущего времени в формате 00:00
    function getCurrentTime() {
      let hour = new Date().getHours();
      let minute = new Date().getMinutes();
      let currentTime = (hour < 10 ? "0" : "") + hour;
      currentTime += (minute < 10 ? ":0" : ":") + minute;
      return currentTime;
    }

    //показать сообщение пользователя
    messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${getCurrentTime()}</div>
            <div class="message__text">${clientMassage}</div>
            </div>
        `;

    //очистить input
    document.querySelector("input").value = " ";

    //ответ бота
    let randomAnswer = Math.floor(Math.random() * answers.length);
    messages.innerHTML += `
            <div class="message">
                <div class="message__time">09:21</div>
                <div class="message__text">${answers[randomAnswer]}</div>
            </div>
        `;

    //автоматическая прокрутка до последнего сообщения
    let lastMessage = document.querySelector(".chat-widget__messages-container");
    lastMessage.scrollTop = lastMessage.scrollHeight;
  }

};
