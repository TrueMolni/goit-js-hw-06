function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт, який змінює кольори фону елемента
//   < body > через інлайн - стиль по кліку на button.change - color
// і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor

//посилання на span, body, button
const refs = {
  bodyRef: document.querySelector("body"),
  spanRef: document.querySelector(".color"),
  btnRef: document.querySelector("button"),
};

//слухач події
refs.btnRef.addEventListener("click", onBtnClickHandle);

function onBtnClickHandle() {
  //зберігаємо наш випадковий колір
  let switchColor = getRandomHexColor();

  //записуємо текст в span i фарбуємо body
  refs.spanRef.textContent = switchColor;
  refs.bodyRef.style.backgroundColor = switchColor;
}
