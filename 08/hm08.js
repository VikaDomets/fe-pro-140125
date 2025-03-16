// Домашня робота:
// 1) у вас є таблиця 
//     <table>
//         <thead>
//             <tr>
//                 <th>
//                     title
//                 </th>
//                 <th>
//                     year
//                 </th>   
//                 <th>
//                     rating
//                 </th>                   
//             </tr>
//         </thead>
//     </table>
// пройдіть по масиву і зробіть заповнення таблиці даними з масива
const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];
let tbodyEl = document.querySelector('tbody')

function createTableRow(book){
    let row = document.createElement('tr');
    let titleCell = document.createElement('td');
    let yearCell = document.createElement('td');
    let ratingCell = document.createElement('td');
    titleCell.textContent = book.title;
    yearCell.textContent = book.year;
    ratingCell.textContent = book.rating;

    row.appendChild(titleCell);
    row.appendChild(yearCell);
    row.appendChild(ratingCell);
    return row;
}
for (let book of booksArray){
    tbodyEl.appendChild(createTableRow(book));
}

// booksArray.forEach(item=>{
//     tbodyEl.appendChild(createTableRow(item));
// });
// for(let i=0; i<booksArray.length; i++){
//     tbodyEl.appendChild(createTableRow(booksArray[i]));
// }

// Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript.
//     const elementsArray = [
//     { tag: 'p', text: 'Елемент 1' },
//     { tag: 'div', text: 'Елемент 2' },
//     { tag: 'span', text: 'Елемент 3' }
// ];

// Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента та повертає його в контейнер.
// Пройдіть циклом по масив і для кожного обєкту застосуйте створену функцію
// За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center

const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
    // Додайте ще пункти меню за потреби
];

const header = document.createElement('header');
header.style.backgroundColor = 'yellow';
header.style.padding = '50px';
header.style.display = 'flex';
header.style.justifyContent = 'center';

document.querySelector('body').prepend(header);

function createLink(value){
    const link = document.createElement('a');
    link.textContent = value.name;
    link.href = value.url;
    link.classList.add('d-block', 'mx-3', 'text-black');
    return link;
}

menuData.forEach(item=>{
    header.appendChild(createLink(item));
});

let [...links] = document.querySelectorAll('header a');
links.forEach(link=>{
    link.setAttribute('target', '_blank');
}) 

// Створіть в хедері А теги з значенням з обєкта name  встановленим значенням в href з url.
// Додайте тегам А що створені в header  атрибут target з властивістю _blank

menuData.forEach(item=>{
    const link = document.createElement('a');
    link.textContent = item.name;
    link.href = item.url;
    link.target = '_blank';

    header.appendChild(link);
});
