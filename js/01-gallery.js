import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

refs.gallery.innerHTML = markup;

const instance = basicLightbox.create(
  `
<img src="" width="800" height="600" loading= "lazy">
`,
  {
    onShow: (instance) => {
      document.addEventListener("keydown", closeModal);
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", closeModal);
    },
  }
);

const img = instance.element().querySelector("img");

const clickOnImage = (event) => {
  event.preventDefault();
  if (event.target === event.currentTarget) return;

  img.src = event.target.dataset.source;

  instance.show();
};

const closeModal = (event) => {
  if (event.key !== "Escape") return;

  instance.close();
};

refs.gallery.addEventListener("click", clickOnImage);
