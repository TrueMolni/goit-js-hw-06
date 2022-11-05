// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і змінює
// інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір
// тексту.

//отримати посилання на інпут та спан
const refs = {
  rangeRef: document.querySelector("#font-size-control"),
  spanRef: document.querySelector("#text"),
};

// створити функцію колбек
const onRangeHandle = (event) => {
  refs.rangeRef = Number(event.target.value);

  refs.spanRef.style.fontSize = `${refs.rangeRef}px`;
};

// повісити слухачів подій
refs.rangeRef.addEventListener("input", onRangeHandle);
// при зміні повзунка - спан змінює розмір шрифта
