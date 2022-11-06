function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає
// кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів
// очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від
// попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

//1. створюємо посилання на кнопки, інпут та контейнер
const refs = {
  divRef: document.querySelector("#boxes"),
  inputRef: document.querySelector("input"),
  createBtnRef: document.querySelector("button[data-create]"),
  destroyBtnRef: document.querySelector("button[data-destroy]"),
};

//2. створили змінну для збереження розміру попереднього елемента
let size = 20;

//3. callback для створення <div>
const createBoxes = (amount) => {
  amount = refs.inputRef.value;

  //цикл для збільшення кожного попереднього <div> з новим кольором
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    refs.divRef.insertAdjacentHTML(
      "beforeend",
      `<div style="background-color: ${getRandomHexColor()}; height: ${size}px; width: ${size}px"></div>`
    );
  }
};

//4.  callback для видалення <div> з HTML та очищення значення інпуту
const destroyBoxes = () => {
  refs.divRef.innerHTML = "";
  refs.inputRef.value = "";
};

//5. Додаємо слухачів подій на наші кнопки
refs.createBtnRef.addEventListener("click", createBoxes);
refs.destroyBtnRef.addEventListener("click", destroyBoxes);

//6. Дякуємо ментору, який це все додивився і перевірив

//   *********** Дякую =) ****************
