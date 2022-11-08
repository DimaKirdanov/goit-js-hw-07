const validInput = document.querySelector("#validation-input");
 
validInput.addEventListener("blur", (event) => {


  if (event.currentTarget.value.length < event.currentTarget.dataset.length) {
    event.currentTarget.classList.remove("valid");
      event.currentTarget.classList.add("invalid");
    
  } else {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  }
});
