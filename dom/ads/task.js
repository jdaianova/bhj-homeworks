const parentRotators = document.querySelectorAll('.rotator');

for (let i = 0; i < parentRotators.length; i++) {
    const rotators = parentRotators[i].children;

    let indexActive = 0;
    let indexNotActive = 1;
    rotators[indexActive].style.color = rotators[indexActive].getAttribute('data-color');

    setInterval(() => {

        rotators[indexActive].classList.remove('rotator__case_active');
        changeColor(rotators[indexNotActive]);
        rotators[indexNotActive].classList.add('rotator__case_active');

        indexActive++;
        indexNotActive++;

        if (indexActive === rotators.length-1) {
            indexNotActive = 0;
        };

        if (indexActive === rotators.length) {
            indexActive = 0; 
        }

        function changeColor (element) {
            element.style.color = element.getAttribute('data-color');
        };

    }, 1000);
    
}