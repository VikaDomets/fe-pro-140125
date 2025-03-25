    
// 1 Створіть канвас і за допомогою JavaScript малюйте на ньому 3 прямокутники  які пересікаються. Використовуйте метод fillRect для цього.
// https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html#fillrect-x-y-w-h

const canvasEl = document.querySelector('canvas');
const ctx = canvasEl.getContext('2d');

function drawDot(x,y){
    ctx.fillStyle = 'black';  
    ctx.fillRect(50,50,100,100);    
    ctx.fill();
    ctx.fillStyle = 'red';
    // ctx.lineWidth = 10.0;                                                  
    ctx.fillRect(100,100,100,100);  
    ctx.fill();
    ctx.fillStyle = 'yellow';
    // ctx.lineWidth = 10.0;                                                  
    ctx.fillRect(150,150,100,100);  
    ctx.fill();
}

canvasEl.addEventListener('click', function(e){
    const rect = canvasEl.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    drawDot(x,y);
});

// 2 Динамічне створення SVG-лінії
// Створіть функцію на JavaScript, яка додає на сторінку SVG-елемент з лінією, параметри якої (початкова та кінцева точки, колір, товщина) передаються як аргументи функції.

let BtEl = document.querySelector('button');
let Container = document.querySelector('.Container');
const svgNS = 'http://www.w3.org/2000/svg';

function DrawLine(x1, y1, x2, y2, color, thickness){
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '500');
    svg.setAttribute('height', '500');

    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', thickness);

    
    svg.appendChild(line);
    Container.appendChild(svg);
} 

    BtEl.onclick = function() {
        DrawLine(0, 0, 20, 0, 'red', 5);
}