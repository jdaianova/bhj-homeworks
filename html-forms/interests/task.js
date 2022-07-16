const interests = document.querySelectorAll('.interests');

interests.forEach( (interest) => {
    const typeOfInterests = interest.parentElement.querySelector('input');
    typeOfInterests.onchange = () => {
        const subInterests = interest.children;
        if (typeOfInterests.checked == true) {
            for (let i = 0; i < subInterests.length; i++) {
                subInterests[i].querySelector('input').checked = true;  
            };
        } else {
            for (let i = 0; i < subInterests.length; i++) {
                subInterests[i].querySelector('input').checked = false;  
            };
        }
    };
} );