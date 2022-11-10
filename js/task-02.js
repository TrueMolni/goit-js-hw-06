const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//створюємо ф-ію для роботи над списком
const createIngridients = () => {
  //взяли посилання на ul
  const ulRef = document.querySelector("#ingredients");
  const arr = [];

  //перебираємо ingredients через map
  ingredients.map((ingr) => {
    //створюємо <li>
    let item = document.createElement("li");
    //додаємо йому клас
    item.classList.add("item");
    //додаємо йому текстовий зміст
    item.textContent = ingr;
    // додаємо до масиву <li>
    arr.push(item);
  });
  //Розпилюємо масив і додаємо до списку за одну операцію
  ulRef.append(...arr);
};
createIngridients();

// 1 Створити окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2 Додасть назву інгредієнта як його текстовий вміст.
// 3 Додасть елементу клас item.
// 4 Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
