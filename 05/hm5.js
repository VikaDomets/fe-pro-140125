// Домашня робота:
// push:
// Завдання 1: Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

console.log('===PUSH===');
let newArray = [];
newArray.push ('4');
newArray.push ('Test');
newArray.push ('8');
newArray.push ('10');
console.log(newArray);

// Завдання 2: Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

let newArray2 = [];
function addElement (arr, element){
    arr.push(element);
    console.log(arr);
}
addElement(newArray2, 'Test');
addElement(newArray2, '8');
addElement(newArray2, '10');
addElement(newArray2, '4');

let foods = [];
let fruits = ['apple', 'banana', 'strawberry', 'melon'];
let vegetables = ['onion', 'tomato', 'cucumber', 'carrot'];
for (let i = 0; i<vegetables.length; i++){
    foods.push(vegetables[i], fruits[i]);
}
console.log(foods);

// pop:
// Завдання 1: Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

console.log('===POP===');
let Fruits = ['apple', 'banana', 'strawberry', 'melon'];
Fruits.pop();
console.log(Fruits);

// Завдання 2: Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

let animals = ['fish', 'dog', 'parrot', 'bear', 'lizard']
function deleteLastElement (arr){
    arr.pop();
    console.log(arr);
}
deleteLastElement(animals);

// unshift:
// Завдання 1: Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

console.log('===UNSHIFT===');
let Animals = ['fish', 'dog', 'parrot', 'bear']
Animals.unshift('cat');
console.log(Animals);

// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

let Names = ['John', 'Alex', 'Anna', 'Mike']
function addFn(add){
    add.unshift('Bob');
    console.log(add);
}
addFn(Names);

// shift:
// Завдання 1: Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

console.log('===SHIFT===');
let familyMembers = ['mother', 'father', 'brother', 'sister']
familyMembers.shift('');
console.log(familyMembers);

// Завдання 2: Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

let members = ['Ann', 'Vika', 'Vlad', 'Kate']
function deleteFn(deleteStart){
    deleteStart.shift('');
    console.log(deleteStart);
}
deleteFn(members);

// fill:
// Завдання 1: Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.
  
console.log('===FILL===');
let fillArray = new Array(10);
console.log(fillArray);
fillArray.fill('Test');
console.log(fillArray); 


// Завдання 2: Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.

let fillArray2 = new Array(10);
function fillFn(arr, value, start, end){
    arr.fill(value, start, end);
    console.log(arr);
}
fillFn(fillArray2, 'Test', 2, 5); 

// splice:
// Завдання 1: Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву. 

console.log('===SPLICE===');
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let spliceNumber = arrayNumbers.splice(2,3);
console.log(arrayNumbers);
console.log(spliceNumber);  

// Завдання 2: Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.
let spliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function spliceFn(arr, value, start, end){
    arr.splice(value, start, end);
    console.log(arr);
}
fillFn(spliceArray, 2, 5);

// reverse:
// Завдання 1: Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.

console.log('===REVERSE===');
let reverseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverseArray.reverse();
console.log(reverseArray);

// Завдання 2: Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

let reverseArray2 = [1, 2, 3, 7, 8, 9, 10];
function reverseFn(arr){
    arr.reverse();
    console.log(arr);
}
reverseFn(reverseArray2);

// concat:
// Завдання 1: Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.

console.log('===CONCAT===');
let fruits2 = ['apple', 'banana', 'strawberry', 'melon'];
let vegetables2 = ['onion', 'tomato', 'cucumber', 'carrot'];
fruits2 = fruits2.concat(vegetables2);
console.log(fruits2);

// Завдання 2: Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.

let number1 = [1, 3, 7 ,12];
let number2 = [101, 9, 15, 24,];
function concatFn(a, b) {
    return a.concat(b);
}
console.log(concatFn(number1, number2));

// includes:
// Завдання 1: Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.

console.log('===INCLUDES===');
let arrayValues = [1, 3, 6, 30 ,192, 45, 82, 7]
console.log(arrayValues.includes(192));
console.log(arrayValues.includes(2));

// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.

let arrayValues2 = [1, 3, 6, 30 ,192, 45, 82, 7]
function includesFn(arr, value) {
    return arr.includes(value);
}
console.log(includesFn(arrayValues2, 192));
console.log(includesFn(arrayValues2, 2));

// filter:
// Завдання 1: Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише парні числа.

console.log('===FILTER===');
let filterArray = [1, 3, 6, 30 ,192, 45, 82, 7, 8, 14, 9, 22, 406]
let pairNumbers = filterArray.filter((number)=>number%2 === 0);
console.log(pairNumbers);

// Завдання 2: Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву, що містить елементи, які задовольняють умову.

let filterArray2 = [1, 3, 6, 30 ,192, 45, 82, 7, 8, 14, 9, 22, 406]
function falterFn(value) {
    return value > 50;
}
let newArrayFilter = filterArray2.filter(falterFn);
console.log(newArrayFilter);

// map:
// Завдання 1: Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.

console.log('===MAP===');
let mapArray =  [1, 3, 6, 30 ,192, 45, 82, 7, 8, 14, 9, 22, 406]
let squareNumbers = mapArray.map((number)=>number*number);
console.log(squareNumbers);

// Завдання 2: Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує стрінг до значення
let mapArray2 =  [1, 3, 6, 30 ,192, 45, 82, 7, 8, 14, 9, 22, 406]
function mapFn(value) {
    return value.toString();
}           
let newArrayMap = mapArray2.map(mapFn);
console.log(newArrayMap);
