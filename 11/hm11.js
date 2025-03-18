// 1 Знаходження всіх великих літер в тексті і збереження їх в масив

let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
let regEx = /[A-Z]/g;
console.log(textStr.match(regEx));

// 2 Вибір числових значень з строки
let operation = "5 плюс 7 = 3";
let operationRegEx = /\d/gm;
console.log(operation.match(operationRegEx));
// 3  Знаходження слів із певною кількістю символів:
// Напишіть регулярний вираз для знаходження слів у тексті, що складаються рівно з 5 букв, можна взяти текст з textStr з першого завдання

let textString = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
let wordRegEx = /\s\w{5}\s/gm;
console.log(textString.match(wordRegEx));

// 061 123 23 45 | 0611232345

function checkPhoneNumber(str) {
    let Numbers = str.match(/\d/g) || [];
    if (Numbers.length === 10 || Numbers.length === 12) {
        console.log("Номер мобільного телефону: " + Numbers.join(""))
    }
    else {
        console.log("Такого номера не існує")
    }
}
checkPhoneNumber("061 123 23 45");
checkPhoneNumber("0611232345");
checkPhoneNumber("+38 097 123-45-67");
checkPhoneNumber("1-800-FLOWERS");
checkPhoneNumber("12345")
