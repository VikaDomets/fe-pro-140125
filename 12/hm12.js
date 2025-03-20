// Домашня робота 
// Створіть веб-сторінку з текстовим полем і кнопкою. При натисканні на кнопку, збережіть введення користувача у sessionStorage. Додайте ще одну кнопку, яка при натисканні відображатиме збережені дані у веб-сторінці.

let textInput = document.querySelector('.form-control');
let saveButton = document.getElementById('saveButton');
let showButton = document.getElementById('showButton');
let textOutput = document.querySelector('.output');

saveButton.addEventListener("click", function(){
    let text = textInput.value;
    sessionStorage.setItem("savedText", text);
    alert("Текст збережено");
    textInput.value = "";
})
showButton.addEventListener("click", function(){
    let savedText = sessionStorage.getItem("savedText");
    if (savedText) {
        textOutput.textContent = "Збережений текст:" + savedText;
    } else {
        textOutput.textContent = "Немає збережених даних."
    }
})

// Створіть просту форму з декількома налаштуваннями (наприклад, кольором фону сторінки), і збережіть вибір користувача у localStorage. При наступному відкритті сторінки, застосуйте ці налаштування.

let [...colorRadioButtons] = document.querySelectorAll('input[name="color"]');
let bodyEl = document.querySelector('.container-color');

let savedColor = localStorage.getItem("selectedColor");
if (savedColor) {
    bodyEl.style,backgroundColor = savedColor;
    document.querySelector(`input[value="${savedColor}"]`).checked = true;
}

colorRadioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        bodyEl.style.backgroundColor = this.value;
        localStorage.setItem("selectedColor", this.value);
    });
});

// Реалізуйте простий список завдань (to-do list), де можна додавати і видаляти пункти. Зберігайте список у localStorage, щоб після перезавантаження сторінки завдання залишалися доступні.

const form = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const erroContainer = document.querySelector('#error-message');

function isValidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function formDate(date){
    const options ={
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric'
    }
    console.log(date);
    return date.toLocaleString('uk-UA', options);
}
let data = [];
console.log(window.localStorage.list);

form.addEventListener('submit', function(event){
    event.preventDefault();
    todoInput.classList.remove('is-invalid');
    erroContainer.classList.remove('d-block');
    const email = todoInput.value.trim(); // trim прибирає початкові і кінцеві частини на елементі
    console.log(isValidEmail(email));
    if(!isValidEmail(email)){
        todoInput.classList.add('is-invalid');
        erroContainer.classList.add('d-block');
        return;
    }
    else{
        console.log(email);
        const curentDate = new Date();

        const formatDate = formDate(curentDate);
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML =`
        <span>${email}</span> <span> ${formatDate}</span>
        `;
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.innerHTML = 'Видалити emeil';
        deleteBtn.addEventListener('click', function(){
            li.remove();
        });
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        todoInput.value = "";
    }
})