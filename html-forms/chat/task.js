const messages = document.querySelector(".chat-widget__messages");

document.querySelector(".chat-widget").onclick = () => {
  document.querySelector(".chat-widget").classList.add("chat-widget_active");
};

document.getElementById("chat-widget__input").onkeydown = function (e) {
  console.log(e.key);
  if (e.code == "Enter") {

    //сообщение, введенное пользователем
    let clientMassage = document.querySelector("input").value;

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
    messages.innerHTML += `
            <div class="message">
                <div class="message__time">09:21</div>
                <div class="message__text">
                    Добрый день, мы ещё не проснулись. Позвоните через 10 лет
                </div>
            </div>
        `;
  }
};
