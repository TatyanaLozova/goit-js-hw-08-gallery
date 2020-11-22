import images from "./gallery-items.js";



const paletteContainer = document.querySelector('.js-gallery');
const cardsGallery = containerGallery(images);

paletteContainer.insertAdjacentHTML('beforeend', cardsGallery);

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




