// Домашня робота:
// 1. onclick
// Задача: Створіть кнопку та елемент Р з текстом,при кліку на кнопку текст змінює колір. Можете створити функцію яка генерує різний колір
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
document.querySelector(".clickBtn").onclick = function () {
    let pElement = document.querySelector('p');
    pElement.style.color = getRandomColor();
}

// 2. ondblclick
// Задача: Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).
let doubleClickElement = document.querySelector('.square');
doubleClickElement.ondblclick = function () {
    let currentWidth = parseInt(window.getComputedStyle(doubleClickElement).width);
    let currentHeight = parseInt(window.getComputedStyle(doubleClickElement).height);
    doubleClickElement.style.width = (currentWidth * 2) + 'px';
    doubleClickElement.style.height = (currentHeight * 2) + 'px';
}
// 3. addEventListener і removeEventListener
// Створити кнопку і текстовий елемент в якому розмість лічільник: 0,при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.
let LargeBtn = document.querySelector('.Larger-font');
let fontElement = document.querySelector('.Font');
let counter = 0;

LargeBtn.addEventListener('click', function increaseCounter(){
    if (counter >= 10){
        LargeBtn.removeEventListener('click', increaseCounter);
        return;
    }
    counter++;
    fontElement.innerText = counter;
});

// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу. Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки

let removeContainer = document.querySelector('.removeContainer');
for (let i=0; i<10; i++){
    let divItem = document.createElement('div');
    divItem.classList.add('p-5', 'bg-success', 'm-1', 'text-white');
    divItem.innerText = `${i+1}`;
    divItem.onclick = function(){
        this.remove();
    }
    removeContainer.appendChild(divItem);

}
// let allItems = document.querySelectorAll('.removeContainer>div');
// allItems.forEach(item => {
//     item.onclick = function(){
//         this.remove();
//     }
// });

// 5.event.target   
// Створіть блок з классом blockContainer з 3 кнопками,  в кожної з яких унікальний клас button.first, button.second, button.third.
// Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік
let blockContainer = document.querySelector('.blockContainer');
let firstEl = document.querySelector('.buttonFirst');
let secondEl = document.querySelector('.buttonSecond');
let thirdEl = document.querySelector('.buttonThird');
let isTunel = false;

firstEl.addEventListener('click',function(e){
    e.stopPropagation();
    alert('This is first button');
},isTunel);
secondEl.addEventListener('click',function(e){
    e.stopPropagation();
    alert('This is second button');
},isTunel);
thirdEl.addEventListener('click',function(e){
    e.stopPropagation();
    alert('This is third button');
},isTunel);
// 6. onclick + робота з css
// створіть кнопку та список з лінками.Кнопка має текст "Відкрити меню". І по кліку на кнопку відкриває меню яке заховане за допомгою css та змінює текст в середині на "Закрити меню"
let menuBtn = document.querySelector('.menuBtn');
let menuEl = document.querySelector('.list-group');
menuBtn.onclick = function(){
    this.classList.toggle('active');
    if(this.classList.contains('active')) {
        this.innerHTML = 'Закрити меню';
    }
    else {
        this.innerHTML = 'Відкрити меню';
    }
    menuEl.classList.toggle('d-none');
}