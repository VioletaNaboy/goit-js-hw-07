import { galleryItems } from "./gallery-items.js";
// Change code below this line
const elAllGallery = document.querySelector(".gallery");
const elGallery = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
elAllGallery.insertAdjacentHTML("afterbegin", elGallery);
console.log(galleryItems);
let gallery = new SimpleLightbox(".gallery__link", {
  captions: true,
  captionDelay: 250,
  captionPosition: "bottom",
  captionsData: "alt",
});
