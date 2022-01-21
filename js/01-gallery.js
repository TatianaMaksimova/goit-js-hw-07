import { galleryItems } from './gallery-items.js';

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
console.log(galleryItems);

const container = document.querySelector('.gallery');

const imagesMarkUp = createMarkupForImages(galleryItems);

container.insertAdjacentHTML('beforeend', imagesMarkUp);

function createMarkupForImages(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join('');
}

// 2. Реализация делегирования на div.gallery и получение url большого изображения.

container.addEventListener('click', onClick);

// const originalUrl = galleryItems.map(item => item.original);
// console.log(originalUrl);

// for (const url of originalUrl) {
//   const instance = basicLightbox.create(`<img src="${url}">`);
// }

function onClick(evt) {
  const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  instance.show();
}

window.addEventListener('keydown', onKeyPress);
const visible = instance.visible();

function onKeyPress(evt) {
  if (evt.key === 'Escape') {
    instance.close();
  }
}
