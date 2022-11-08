const formNormalized = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const email =
    event.target.elements.email.value === ""
      ? alert("Все поля должны быть заполнены!")
      : event.target.elements.email.value;

  const password =
    event.target.elements.password.value === ""
      ? alert("Все поля должны быть заполнены!")
      : event.target.elements.password.value;

  const formData = {
    email,
    password,
  };

  formNormalized.reset();

  console.log(formData);
};

formNormalized.addEventListener("submit", onFormSubmit);
