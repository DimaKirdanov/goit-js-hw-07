const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  textChange: document.querySelector("#text"),
};

refs.fontSizeControl.addEventListener("input", (event) => {
refs.textChange.style.fontSize = `${event.target.value}px`;
});
