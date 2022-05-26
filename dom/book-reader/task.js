const fontLinks = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

for (let i = 0; i < fontLinks.length; i++) {
    fontLinks[i].addEventListener('click', (event) => {

        // запретить переход по ссылке
        event.preventDefault();

        //удалить все открытые вкладки
        for (let j = 0; j < fontLinks.length; j++) {
            fontLinks[j].classList.remove('font-size_active'); 
        };

        //сделать активной выбранную ссылку
        event.target.classList.add('font-size_active');

        //сделать активным выбранный размер контента
        if (event.target.getAttribute('data-size') === "big") {
            book.classList.add('book_fs-big');
        } else if (event.target.getAttribute('data-size') === "small") {
            book.classList.add('book_fs-small');
        } else {
            book.classList.remove('book_fs-small', 'book_fs-big');
        };
        
    });
};
