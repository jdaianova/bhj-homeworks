const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (event) => {

        //удалить все открытые вкладки
        let currentTabs = event.target.parentElement.children;
        for (let j = 0; j < currentTabs.length; j++) {
            currentTabs[j].classList.remove('tab_active'); 
        };

        //сделать активной выбранную ссылку
        event.target.classList.add('tab_active');

        //удалить весь открытый контент
        let currentContents = event.target.parentElement.nextElementSibling.children;
        for (let n = 0; n < currentContents.length; n++) {
            currentContents[n].classList.remove('tab__content_active'); 
        };

        //сделать активным выбранный контент
        contents[i].classList.add('tab__content_active'); 
    });
    
}