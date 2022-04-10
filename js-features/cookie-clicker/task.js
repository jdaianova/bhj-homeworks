const imageCockie = document.getElementById('cookie');
const startcounterClicks = document.getElementById('clicker__counter');

let counterClicks = Number(startcounterClicks.innerHTML);
imageCockie.onclick = chageImageSize => {
    if (imageCockie.width === 200) {
        imageCockie.width = 250;
        counterClicks++;
        startcounterClicks.innerHTML = counterClicks;
    } else {
        imageCockie.width = 200;
        counterClicks++;
        startcounterClicks.innerHTML = counterClicks;
    };  
};