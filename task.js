import cards from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const openModal = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');

function createMarkUp(data){
    return data.map(item => {
        const itemRef = document.createElement('li');
        itemRef.classList.add('gallery__item');
        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.setAttribute('href', item.original);
        const img = document.createElement('img');
        img.classList.add('gallery__image');
        img.setAttribute('src', item.preview); 
        img.setAttribute('data-source', item.original);
        img.setAttribute('alt', item.description);
        
        link.append(img);
        itemRef.append(link);
        
        gallery.append(itemRef);
    });
}

console.log(createMarkUp(cards));
gallery.append(...cards);
console.log(gallery);


gallery.addEventListener('click', onPictureClick);

function onPictureClick(event){
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return;
    }else{
        onOpenModal(event)
    }
}


function onOpenModal(event){
    openModal.classList.add('is-open');
    lightboxImg.setAttribute('src', event.target.dataset.source);
    lightboxImg.setAttribute('alt', event.target.alt);
    
}


closeModalBtn.addEventListener('click', onCloseModal);
function onCloseModal(){
    openModal.classList.remove('is-open');
    lightboxImg.setAttribute('src', '');
    lightboxImg.setAttribute('alt', '');
}
