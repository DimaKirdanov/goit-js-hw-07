import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);
instance.show();
const refs = {
  
};

// console.log(creatGaleryCard(galleryItems));
function creatGaleryCard(galleryItems) {
  return galleryItems
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
}
// console.log(creatGaleryCard(galleryItems));
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = creatGaleryCard(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const isImageGallery = evt.target.classList.contains("gallery__image");
  if (!isImageGallery) {
    return;
  }
  console.log(evt.target.dataset.source);
}



