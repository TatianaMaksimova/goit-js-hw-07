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
let instance;

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);

  instance.show();
  window.addEventListener('keydown', onKeyPress);
}

function onKeyPress(e) {
  console.log(e);
  if (e.code === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', onKeyPress);
  }
}
