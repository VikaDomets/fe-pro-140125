// Домашня робота:
// 1)Порівняння трьох чисел:
// Запитайте у користувача ввести три числа (ввести через prompt)
// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.

let firstNumber = Number(prompt('Впишіть перше довільне число:'));
let secondNumber = Number(prompt('Впишіть друге довільне число:'));
let thirdNumber = Number(prompt('Впишіть третє довільне число:'));
let maxNumber = '';
if(firstNumber>secondNumber && firstNumber>thirdNumber){
    console.log(`Найбільше число серед чисел ${firstNumber}`);
}
else if(secondNumber>firstNumber && secondNumber>thirdNumber){
    console.log(`Найбільше число серед чисел ${secondNumber}`);
}
else if(thirdNumber>firstNumber && thirdNumber>secondNumber){
    console.log(`Найбільше число серед чисел ${thirdNumber}`);
}
else{
    console.log(`Серед навединих чисел немає найбільшого числа`);
}

// 2) Визначення сезону:
// Запитайте у користувача ввести номер місяця (від 1 до 12).
// Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.

let monthNumber = Number(prompt('Впишіть номер місяця (від 1 до 12):'));
let month = '';
month = (monthNumber === 12 && monthNumber<=2) ? 'Це зима' :
        (monthNumber>=3 && monthNumber<=5) ? 'Це весна' :
        (monthNumber>=6 && monthNumber<=8) ? 'Це літо' : 'Це осінь';
console.log(month);

// 3)Визначення розміру числа:
// Запитайте у користувача ввести число.
// Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.

let userNumber = Number(prompt('Впишіть довільне число:'));
if(userNumber>=1){
    console.log(`Число ${userNumber} є додатнім`);
}
else if (userNumber<0){
    console.log(`Число ${userNumber} є від'ємним`);
}
else {
    console.log(`Число є нулем`);
}

// 4) Перевірка величини кута:
// Запитайте у користувача ввести величину кута в градусах.
// Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.

let angle = Number(prompt('Впишіть величину кута в градусах:'));
let angleType = '';
angleType = (angle<90) ? 'Кут гострий' : 'Кут тупий';        
console.log(angleType);

// 5) Визначення типу геометричної фігури за допомогою switch:
// Створіть код, який приймає назву геометричної фігури ("коло", "квадрат", "трикутник") і використовуючи switch оператор,
//виводить повідомлення про кількість сторін цієї фігури (наприклад, "Коло має 0 сторін", "Квадрат має 4 сторони").

let geometricFigure = prompt('Впишіть одну з фігур:"коло", "квадрат", "трикутник"');
switch(geometricFigure) {
    case 'коло' :
    case 'Коло' :
        console.log(`${geometricFigure} має 0 сторін`);
        break;
    case 'квадрат' :
    case 'Квадрат' :
        console.log(`${geometricFigure} має 4 сторони`);
        break;
    case 'трикутник' :
    case 'Трикутник' :
        console.log(`${geometricFigure} має 3 сторони`);
        break;  
    default:
        console.log('Ви ввели невірну фігуру');
}

// 6) Підрахунок суми парних чисел:
// Створіть код, який використовує цикл while для знаходження суми всіх парних чисел в заданому діапазоні (наприклад, від 1 до 20).

let sum = 0;
let whileNumber = 1;
while(whileNumber<=20){
    if(whileNumber%2===0){
        sum += whileNumber;
    }
    whileNumber++;
}
console.log(`Сума всіх парних чисел від 1 до 20 = ${sum}`);

// 7) Таблиця множення:
// Використовуючи цикл for, напишіть програму, яка генерує "таблицю множення" виводимо в console.log операції  для конкретного числа (наприклад, для числа 5).
  
let number = 5; 
for (let i=1; i<=10; i++) {
    console.log(`${number} * ${i} = ${number*i}`);
}