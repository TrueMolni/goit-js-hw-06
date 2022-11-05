// 1. Отримуємо посилання на інпут
const inputRef = document.querySelector("#validation-input");

const onInputBlur = () => {
  // 2. Змінна для перевірки валідації
  const validValue = inputRef.dataset.length;

  // 3. Кидаємо клас invalid
  inputRef.classList.add("invalid");
  console.log(inputRef);

  // 4. Перевіряємо валідність і за потреби змінємо клас на інпуті
  if (inputRef.value.length === Number(validValue)) {
    inputRef.classList.replace("invalid", "valid");
  }
};
// 5. Додаємо слухача події на інпут щоб все працвало
inputRef.addEventListener("blur", onInputBlur);
