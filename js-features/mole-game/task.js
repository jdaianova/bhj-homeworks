const startCounterDead = document.getElementById('dead');
const startCounterLost = document.getElementById('lost');
let counterDead = Number(startCounterDead.textContent);
let counterLost = Number(startCounterLost.textContent);

document.addEventListener('click', currentHole => {
    if ( currentHole.target.className.includes( 'hole_has-mole' ) ) {
        counterDead++;
        startCounterDead.textContent = counterDead;
        if (counterDead > 10 && counterLost < 5) {
            alert('Игра закончена! Вы выиграли!');
            restartCounters();
        };
    } else {
        counterLost++;
        startCounterLost.textContent = counterLost;
        if ((counterLost === 5) && (counterDead < 10)) {
            alert('Игра закончена! Вы проиграли!');
            restartCounters();
        };
    }
});

function restartCounters() {
    counterLost = 0;
    counterDead = 0;
    startCounterLost.textContent = counterLost;
    startCounterDead.textContent = counterDead;
};
