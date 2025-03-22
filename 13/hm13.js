// Домашня робота:
// Отримання списку користувачів

// Використовуйте fetch для отримання списку всіх користувачів з JSONPlaceholder (/users ендпойнт).
// https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => console.log(json))

// Виведіть імена та електронні адреси користувачів у консоль або на веб-сторінку.

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    let userList = document.createElement('div');
    users.forEach(user => {
        console.log(`Ім'я: ${user.name}, Електронна адреса: ${user.email}`);
        let listItem = document.createElement('p');
        listItem.textContent = `Ім'я: ${user.name}, електронна адреса: ${user.email}`;
        userList.appendChild(listItem);
    })
    document.body.appendChild(userList);
})
.catch(error => console.error('Помилка при отриманні користувачів:', error));

// Виведення детальної інформації про одного користувача

fetch('https://jsonplaceholder.typicode.com/users/2')
  .then(response => response.json())
  .then(user => {
    console.log(`Ім'я: ${user.name}`);
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
    console.log(`Адреса: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`);
    console.log(`Гео: (${user.address.geo.lat}, ${user.address.geo.lng})`);
    console.log(`Телефон: ${user.phone}`);
    console.log(`Веб-сайт: ${user.website}`);
    console.log(`Компанія: ${user.company.name}`);
    console.log(`Фраза компанії: ${user.company.catchPhrase}`);
    console.log(`Сфера діяльності: ${user.company.bs}`);
    
    const userDetails = document.createElement('div');
    userDetails.innerHTML = `
      <h2>Ім'я: ${user.name}</h2>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Адреса:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
      <p><strong>Гео:</strong> (${user.address.geo.lat}, ${user.address.geo.lng})</p>
      <p><strong>Телефон:</strong> ${user.phone}</p>
      <p><strong>Веб-сайт:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
      <p><strong>Компанія:</strong> ${user.company.name}</p>
      <p><strong>Фраза компанії:</strong> ${user.company.catchPhrase}</p>
      <p><strong>Сфера діяльності:</strong> ${user.company.bs}</p>
    `;
    document.body.appendChild(userDetails);
  })
  .catch(error => console.error('Помилка при отриманні даних користувача:', error));

// Зробити сторінку з кнопкою, при натиску на кнопку робиться запит до 
// http swapi.dev/api/planets/ та виводиться картка з даними з запиту, дані з масиву які мають лінк треба вивести в тег А і додати лінк в атрибут href

let button = document.getElementById('btGreen');
let container = document.querySelector('.container');
button.addEventListener('click', async() => {
    try {
        let response = await fetch("https://swapi.dev/api/planets/");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        container.innerHTML = "";
        
        data.results.forEach(planet => {
            const card = document.createElement("div");
            card.className = "card m-3 p-3";
            card.style.width = "18rem";

            card.innerHTML = `
                <h5 class="card-title">${planet.name}</h5>
                <p><strong>Клімат:</strong> ${planet.climate}</p>
                <p><strong>Населення:</strong> ${planet.population}</p>
                <p><strong>Діаметр:</strong> ${planet.diameter}</p>
                <p><strong>Гравітація:</strong> ${planet.gravity}</p>
                <p><strong>Жителі:</strong> ${generateLinks(planet.residents)}</p>
                <p><strong>Фільми:</strong> ${generateLinks(planet.films)}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Помилка:", error);
    }
});

function generateLinks(array) {
    if (!array.length) return "Немає даних";
    return array.map(url => `<a href="${url}" target="_blank">Посилання</a>`).join(", ");
}

// Отримання даних користувача з JSONPlaceholder
// Створіть функцію, яка використовує async/await для отримання даних про конкретного користувача за id JSONPlaceholder. Виведіть ім'я та електронну адресу користувача.
// підказка: запит за іd чи іншими параметрами https://jsonplaceholder.typicode.com/users/${userId}

async function getUserData(userId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if(!response.ok) {
            throw new Error (`Error! Status: ${response.status}`);
        }
        let user = await response.json();
        console.log(`Ім'я: ${user.name}`);
        console.log(`Електронна адреса: ${user.email}`);
    } catch (error) {
        console.log('Помилка отримання даних', error);
    }
}
getUserData(4);

// Завдання 2: Виведення інформації про фільм з SWAPI
// Використайте async/await для запиту інформації про конкретний фільм з SWAPI. Виведіть назву фільму та дату виходу.

async function getFilmData(filmId) {
    try {
        let response = await fetch(`https://swapi.dev/api/films/${filmId}`)
        if (!response.ok) {
            throw new Error (`HTTP error! Status: ${response.status}`)
        }
        let film = await response.json();
        console.log(`Назва фільму: ${film.title}`);
        console.log(`Дата виходу: ${film.release_date}`);
    } catch(error) {
        console.log('Помилка отримання даних про фільм:', error)
    }
}
getFilmData(1);

// Імпорт утиліти для роботи з текстом
// Створіть файл stringUtilities.js, де будуть функції для роботи з рядками, наприклад, функція для перетворення рядка в uppercase і функція для обернення рядка. Експортуйте ці функції. В index.js імпортуйте та використовуйте ці функції.