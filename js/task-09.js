function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonChangeColor: document.querySelector(".change-color"),
  bodyColor: document.querySelector("body"),
  colorValueText: document.querySelector(".color"),
};

function changeColor() {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
  refs.colorValueText.textContent = getRandomHexColor();
}

refs.buttonChangeColor.addEventListener("click", changeColor);
