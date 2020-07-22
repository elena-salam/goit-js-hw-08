import cards from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const openModal = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');

// создаем лишку (itemRef), наполняя ее вложенностью, классами и атрибутами.
// Даныне берем из массива объектов gallery-items.js
function createStackOfPictures(data){
    
        const itemRef = document.createElement('li');
        itemRef.classList.add('gallery__item');
        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.setAttribute('href', data.original);
        const img = document.createElement('img');
        img.classList.add('gallery__image');
        img.setAttribute('src', data.preview); 
        img.setAttribute('data-source', data.original);
        img.setAttribute('alt', data.description);
        
        link.append(img);
        itemRef.append(link);
        
        return itemRef;
   
}

// собираем все лишки в массив
const arreyOfLi = cards.map(item=>createStackOfPictures(item));
console.log(arreyOfLi);

// вкладываем массив (через распыление) в галлерею ul за один раз
gallery.append(...arreyOfLi);
console.log(gallery);


// при клике на превью картинки открываем модальное окно с большим изображением
// Для того чтобы открыть модалку, необходимо добавить на div.lightbox CSS-класс is-open
// для этого создаем слушатель клика по картинке (сначала делая делегирование на ul)


gallery.addEventListener('click', onPictureClick);

function onPictureClick(event){
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return;
    }
    openModal.classList.add('is-open');
    lightboxImg. setAttribute('src', event.target.dataset.source);
    lightboxImg. setAttribute('alt', event.target.alt);
}
// 

// закрываем модалку
// Вешаем слушателя на button[data-action="close-modal"] (кнопка "крестик").
// Очищаем значение атрибута src элемента img.lightbox__image

closeModalBtn.addEventListener('click', onCloseModal);
function onCloseModal(){
    openModal.classList.remove('is-open');
    lightboxImg. setAttribute('src', '');
    lightboxImg. setAttribute('alt', '');
}


