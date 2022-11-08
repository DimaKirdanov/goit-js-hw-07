const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredientsItems = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  console.log(item);
  return item;
});
const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredientsItems);





// const ingredientsItems = ingredients.map((ingredient) => {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add("item");
//   console.log(item);
//   return item;
// });
// const ingredientsEl = document.querySelector("#ingredients");
// ingredientsEl.append(...ingredientsItems);