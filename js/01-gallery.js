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

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);
  instance.show();
}

// Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для программного закрытия модального окна.

window.addEventListener('keydown', onKeyPress);

function onKeyPress(evt) {
  console.log(evt.key);
}
