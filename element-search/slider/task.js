const sliderItems = document.querySelectorAll('.slider__item');
const leftArrow = document.querySelector('.slider__arrow_prev');
const rightArrow = document.querySelector('.slider__arrow_next');
let numberOfCurrentSlider = 0;

function decreaseCounter() {
    if (numberOfCurrentSlider === 0) {
        numberOfCurrentSlider = sliderItems.length - 1;
    } else {
        numberOfCurrentSlider--;
    };
};

function increaseCounter() {
    if (numberOfCurrentSlider === sliderItems.length - 1) {
        numberOfCurrentSlider = 0;
    } else {
        numberOfCurrentSlider++;
    };
};

leftArrow.addEventListener('click', () => {
    sliderItems[numberOfCurrentSlider].classList.remove('slider__item_active');
    decreaseCounter();
    sliderItems[numberOfCurrentSlider].classList.add('slider__item_active');
});

rightArrow.addEventListener('click', () => {
    sliderItems[numberOfCurrentSlider].classList.remove('slider__item_active');
    increaseCounter();
    sliderItems[numberOfCurrentSlider].classList.add('slider__item_active');
});

