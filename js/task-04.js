// 1. Беремо посилання на кнопки і табло
const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  scoreboard: document.querySelector("#value"),
};

// 2. Створюємо змінну counterValue в якій буде зберігатися поточне значення лічильника
let counterValue = 0;

// 3. Функція для оновлення
const update = () => (refs.scoreboard.textContent = counterValue);

// 4. Створюємо колбеки для "+" і "-"
const handleDecrement = () => {
  counterValue -= 1;
  update();
};

const handleIncrement = () => {
  counterValue += 1;
  update();
};
// 4. Додати слухачів кліків до кнопок
refs.decrementBtn.addEventListener("click", handleDecrement);
refs.incrementBtn.addEventListener("click", handleIncrement);
