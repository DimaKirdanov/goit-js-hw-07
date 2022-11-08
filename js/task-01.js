// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.

const numItem = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${numItem.length}`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст
// заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных
// в него < li >).
numItem.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});

