const startTimer = document.getElementById("timer");
let timer = Number(startTimer.innerHTML);

const countInterval = setInterval(timerCountDown, 1000);

function timerCountDown() {
    if (timer < 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(countInterval);
        return;
    };
    startTimer.innerHTML = timer;
    timer--;
};
