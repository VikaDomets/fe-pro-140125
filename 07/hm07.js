// Домашня робота:
// Використовуючи стрінгові методи  а також Маth напишіть код для функціоналу гри ( Камінь ножиці папір)

console.log('=====')
let choiceUser = prompt('Виберіть: камінь, ножиці, папір');
let lowerJs = choiceUser.toLowerCase();
console.log(lowerJs);

function ComputerChoice() {
    const choices = ["камінь", "ножиці", "папір"];
    return choices[Math.floor(Math.random() * choices.length)];
}
console.log(ComputerChoice());

function game(choiceUser, choiceComp) {
    if (choiceUser === choiceComp) {
        console.log('Нічия!')
    }
    else if (choiceUser === 'камінь' && choiceComp === 'ножиці' || choiceUser === 'папір' && choiceComp === 'камінь' || choiceUser === 'ножиці' && choiceComp === 'папір') {
        console.log('Ви виграли!')
    }
    else {
        console.log('Ви програли')
    }
}
game(lowerJs, ComputerChoice());

// Напишіть функцію, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof.

console.log('=====')
let textUser = 2;   
function textFn (value) {
    if (typeof value === 'number') {
        console.log('Це число')
    }
    else if (typeof value === 'string'){
        console.log('Це рядок')
    }
    else {
        console.log('Це інший тип')
    }
}
textFn(2);
textFn('Text info');
textFn(true);

// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.

console.log('=====')
function average( ...arguments) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}
console.log(average(1, 2, 3, 4, 5));

// Створіть html за ціми js селекторами
// document.querySelectorAll('ul.nav > li')
// document.querySelector('li:nth-child(2)')
// document.querySelector('header nav a')

console.log('=====')
document.querySelectorAll('ul.nav > li');
document.querySelector('li:nth-child(2)');
document.querySelector('header nav a');
