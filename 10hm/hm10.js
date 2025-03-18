// Домашня робота:
// Форма з вибором улюбленого кольору:
// Створіть форму з декількома радіокнопками, кожна з яких представляє різний колір (наприклад, червоний, зелений, синій).
// Використовуйте подію onchange для кожної радіокнопки, щоб змінювати колір фону сторінки відповідно до вибору користувача.

let [...colorRadioButtons] = document.querySelectorAll('input[name="color"]');
let bodyEl = document.querySelector('body');

colorRadioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        bodyEl.style.backgroundColor = this.value;
    });
});


// Форма для вибору хобі з чекбоксами:
// Створіть чекбокси для різних хобі (наприклад, читання, спорт, музика).
// Встановіть обробник події onchange для кожного чекбоксу, щоб відображати список вибраних хобі у текстовому елементі під формою.

let [...hobbyCheckboxes] = document.querySelectorAll('input[name="hobby"]');

let hobbyResultEl = document.querySelector('#hobbyResult');

hobbyCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function(){
        let checkHobbies = hobbyCheckboxes.filter(i=>i.checked).map
        (item => item.value);
        hobbyResultEl.textContent = `Вибрано хоббі: ${checkHobbies.join(', ')}`;
    });
});
console.log(hobbyCheckboxes);

// Створіть групу радіокнопок для оцінки від 1 до 5.
// Додайте обробник події onchange для виявлення вибору користувача, а потім виведіть відповідне повідомлення (наприклад, "Дякуємо за вашу оцінку!").

const [...radioButtonsElements] = document.querySelectorAll('input[name="rating"]');
const ratingResult = document.querySelector('#ratingResult');

radioButtonsElements.forEach(radioButtonsEl=>{
    radioButtonsEl.addEventListener('change', function(){
        ratingResult.textContent = `Рейтинг за вашою оцінкою: ${this.value}`;
    });
})

//  Динамічний список задач
// Мета: Створити додаток для управління списком задач, де користувач може додавати та видаляти задачі.

// Інструкції:
// Створіть поле введення для введення назви задачі.
// Додайте кнопку для додавання задачі до списку.
// Кожна додана задача повинна з'являтися на сторінці у вигляді списку.
// Додайте можливість видалення задачі зі списку.
 
