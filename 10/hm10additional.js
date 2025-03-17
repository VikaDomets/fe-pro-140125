// Завдання 'onContextMenu': 
// Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера 
// з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", "вирівняти 
// по правому центру", "вирівняти по лівому краю", "Приховати елемент".

let textBlock = document.querySelector('.onContextMenu');

let contextMenu = document.createElement('div');
contextMenu.style.position = 'absolute';
contextMenu.style.background = 'grey';
contextMenu.style.color = 'white';
contextMenu.style.border = '1px solid black';
contextMenu.style.padding = '10px';
contextMenu.style.display = 'none';
contextMenu.style.zIndex = '1000';

const options = [
    {text:"Вирівняти по центру", action: () => textBlock.style.textAlign = 'center'},
    {text:"Вирівняти по правому краю", action: () => textBlock.style.textAlign = 'right'},
    {text:"Вирівняти по лівому краю", action: () => textBlock.style.textAlign = 'left'},
    {text:"Приховати елемент", action: () => textBlock.style.display = 'none'},
]

options.forEach(option => {
    let button = document.createElement('div');
    button.textContent = option.text;
    button.style.padding = '5px 10px';
    button.style.cursor = 'pointer';
    button.addEventListener('click', () => {
        option.action();
        contextMenu.style.display = 'none'; 
    });
    button.addEventListener('mouseover', () => button.style.background = 'white');
    button.addEventListener('mouseover', () => button.style.color = 'black');
    button.addEventListener('mouseout', () => {
        button.style.background = 'grey';
        button.style.color = 'white';
    });

    contextMenu.appendChild(button);
});

document.body.appendChild(contextMenu);

textBlock.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    contextMenu.style.left = `${e.pageX}px`;
    contextMenu.style.top = `${e.pageY}px`;
    contextMenu.style.display = 'block';
});

document.addEventListener('click', function () {
    contextMenu.style.display = 'none';
});

