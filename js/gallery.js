import images from "./gallery-items.js";



const galleryContainer = document.querySelector('.js-gallery');
const cardsGallery = containerGallery(images);
galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

 const openModalImage = document.querySelector('.js-lightbox');
const modalImage = document.querySelector('.lightbox__image');
// const boxOverlay = document.querySelector('.lightbox__overlay');

const modalCloseBtn = document.querySelector('button[data-action="close-lightbox"]');
 
galleryContainer.addEventListener('click', openModal);
 modalCloseBtn.addEventListener('click', cloceModal);
galleryContainer.addEventListener('click', onBackDropClick);
// boxOverlay.addEventListener('click', overlay);


// функция создания всей разметки
function containerGallery(gallery) {
  return gallery.map(({ original, preview, descriptiony }) => {
    return`<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${descriptiony}"
    />
  </a>
</li>
    `
  }).join('');

}

// функция для открытия модал
function openModal(evt) {
  evt.preventDefault()
  if (!evt.target.classList.contains('gallery__image')) {
    return
  }
  openModalImage.classList.add('is-open');
  modalImage.src = evt.target.dataset.source
}

// функция для закрытия модал
function cloceModal() {
 
  openModalImage.classList.remove('is-open');
// Очистка значения атрибута src элемента 
  lightboxImage.src = '';
  }
 

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal()

  }
}
