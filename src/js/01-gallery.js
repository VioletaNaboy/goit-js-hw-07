import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const elGallery = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", elGallery);
gallery.addEventListener("click", selectImg);
function selectImg(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const selectedImg = event.target.dataset.source;
    const instance = basicLightbox.create(
      `
    <img src="${selectedImg}" alt="${event.target.alt}"> `
    );
    instance.show();
    document.addEventListener("keydown", closeByEscape);
    function closeByEscape(event) {
      if (event.code === "Escape") {
        instance.close();
        document.removeEventListener("keydown", closeByEscape);
      }
    }
  } else {
    return;
  }
}
