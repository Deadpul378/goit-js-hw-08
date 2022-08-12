// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = createGalleryItem(galleryItems);
function createGalleryItem(item) {
  return item
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
    </a>`
    )
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});
lightbox.options.captionDelay = '250';
console.log(galleryItems);
