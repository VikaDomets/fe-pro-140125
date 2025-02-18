// Домашня робота:
// 1 Калькулятор 
// Створіть функції для кожної математичної операції (функцію сумми створена на уроці) 
//використовуючи switch  напишіть програму яка отримує знак математичної операції (+, -, /, *) та 2 значення і 
//запускає функцію для цієї математичної операції з 2 цифровими значеннями

let operation = prompt("Enter operator (+, -, *, /):");
let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));

let summFn = function (a,b) {
    let summInsideFn = a + b;
    return summInsideFn;
}
let subFn = function (a,b) {
    let subInsideFn = a - b;
    return subInsideFn;
}
let divFn = function (a,b) {
    if (b === 0 ){
        return "Помилка: ділення на нуль";
    }
    let divInsideFn = a / b;
    return divInsideFn;
}
let multFn = function (a,b) {
    let multInsideFn = a * b;
    return multInsideFn;
}
let fnResult = function (a, b, operation) {
    switch (operation) {
        case '+':
            console.log(`Result of summation is: ${summFn(a,b)}`);
            break;
        case '-':
            console.log(`Result of subtraction is: ${subFn(a,b)}`);
            break;
        case '/':
            console.log(`Result of division is: ${divFn(a,b)}`);
            break;
        case '*':
            console.log(`Result of multiplication is: ${multFn(a,b)}`);
            break;
        default:
            return 'Error';
    }
}
console.log(fnResult(a, b, operation));

// 2 Параметри та колбеки:
// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), 
//і викликає цю функцію для кожного елемента масиву.

let users = ['Tom', 'Bill', 'Jack', 'Anna', 'Kate'];
function hiUser (userName) {
    console.log(`Вітаю ${userName}`);
}

function wellcomUser(array, hiUser) {
    for (let i = 0; i < array.length; i++){
        hiUser(array[i]);
    }
}
wellcomUser(users, hiUser);

// 3 Знаходження першого парного числа:
// Напишіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить перше знайдене парне число. 
//Використайте оператор break, щоб припинити виконання циклу, якщо парне число знайдено.

for(let i = 1; i<=10; i++){
    if(i%2 === 0){
        console.log(`Перше знайдене парне число ${i}`)
        break
    }
}

// 4 Виведення парних чисел:
// Створіть програму, яка використовує цикл for для перебору массиву від 1 до 10 і виводить тільки парні числа. 
//Використайте оператор continue, щоб пропустити ітерації для непарних чисел.

for(let i = 1; i<=10; i++){
    if(i%2 === 0){
        console.log(`Знайдене парне число ${i}`)
        continue;
    }
}