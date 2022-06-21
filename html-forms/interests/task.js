const mainInterests  = document.querySelectorAll('.interest__check');
console.log(mainInterests);

for (let i = 0; i < mainInterests.length; i++) {
    mainInterests[i].onchange = () => {
        const childrenInterests = mainInterests[i].children;
        console.log (i);
        console.log (childrenInterests); //?

        if (mainInterests[i].checked == true) {
            for (let j = 0; j < childrenInterests.length; j++) {
                childrenInterests.checked = true;   
            };
        } else {
            for (let j = 0; j < childrenInterests.length; j++) {
                childrenInterests[j].checked = false;   
            };
        }
    }
}