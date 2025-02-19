// Домашня робота:
// 1 Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

class Person {
    constructor(name, age){
        this.name = name;    
        this.age = age;
    }
}
let firstPerson = new Person('John', 30);
console.log(firstPerson);

// 2 Методи класу:
// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.

class Person1 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, nice to meet you ${this.name}`);
    }
}
let secondPerson = new Person1('John', 30); 
secondPerson.sayHello();

// 3 Наслідування:
// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про вивчення студентом.

class Student extends Person {
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
    }
    study() {
        console.log(`Student name:${this.name}, age:${this.age}, studentId:${this.studentId}`)
    } 
}
let student = new Student('John', 30, 12345);
student.study();

// Переишіть цей код використовуючи let const~
// // Замість var
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// // Замість var
// var message = 'test';
// function example() {
//     if (true) {
//         var message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message); // Виведе 'Hello, world!'
// }

for (let i = 0; i < 5; i++) {
    console.log(i);
}

const message = 'test';
function example(){
    if(true) {
        const message = 'Hello world1';
        console.log(message);
    }
    console.log(message);
}

// Використовуючи for in  виведіть значення з обєктку в console.log

const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};
for(let value in person){
    console.log(`${value}: ${person[value]}`);
}

// Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
for (let student of students) {
    for (let value in student) {
        console.log(`${value}: ${student[value]}`);
    }
}
for (let student of students) {
    console.log(student);
}

for (let student of students) {
    for (let key in student) {
        console.log(`${key}: ${student[key]}`); // Отримуємо значення за ключем
    }
    console.log('---');
}

// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік
// Виведіть результат у консоль.

let userAge = Number(prompt('Вкажіть свій вік'));
function userBirthAge(age) {
    let cureentYear = new Date().getFullYear();
    console.log(`Your Birthaday Year is ${cureentYear-age}`);
}
userBirthAge(userAge);
