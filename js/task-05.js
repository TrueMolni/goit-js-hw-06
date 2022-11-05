// Напиши скрипт, який під час набору тексту
//  в інпуті input#name - input(подія input), підставляє
//   його поточне значення в span#name - output.Якщо інпут
// порожній, у спані повинен відображатися рядок "Anonymous".

//1.Беремо посилання на input та span
const refs = {
  inputRef: document.querySelector("#name-input"),
  spanRef: document.querySelector("#name-output"),
};

// 3. Додамо callback на опрацювання значення інпуту
const handleInput = (event) => {
  const CHECK = "";
  refs.spanRef.textContent = event.currentTarget.value;
  //перевірка на порожнє значення
  if (refs.spanRef.textContent === CHECK) {
    refs.spanRef.textContent = "Anonymous";
  }
};

// 4.Додамо слухача події на input
refs.inputRef.addEventListener("input", handleInput);
