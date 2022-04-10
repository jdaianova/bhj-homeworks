const startTimer = document.getElementById("timer");
let timer = Number(startTimer.innerHTML);

const countIntervar = setInterval(timerCountDown, 1000);

function timerCountDown() {
    if (timer < 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(countIntervar);
        return;
    };
    startTimer.innerHTML = timer;
    timer--;
};
