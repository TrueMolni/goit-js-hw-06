// 1.Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2.Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3.Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//     що всі поля повинні бути заповнені.
// 4.Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// 5.Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formRef = document.querySelector(`.login-form`);

console.log(formRef);

const onSubmitHandle = (event) => {
  event.preventDefault();
  let userData = {};
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("всі поля повинні бути заповнені");
  } else
    userData = {
      email: email.value,
      password: password.value,
    };
  console.log(userData);
  formRef.reset();
};

formRef.addEventListener("submit", onSubmitHandle);
