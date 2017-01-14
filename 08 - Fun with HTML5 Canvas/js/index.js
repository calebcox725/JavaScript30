const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let coords = {x: 0, y: 0};
let hue = 0;
let isGrowing = true;
let isDrawing = false;

function draw(e) {
  if (isDrawing) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    
    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    
    coords = {x: e.offsetX, y: e.offsetY};
    hue++;
    
    isGrowing = (ctx.lineWidth > 1 && ctx.lineWidth < 120) ? isGrowing : !isGrowing;
    isGrowing ? ctx.lineWidth++ : ctx.lineWidth--;
  }
}

function startDrawing(e) {
  isDrawing = true;
  coords = {x: e.offsetX, y: e.offsetY};
}

function stopDrawing() {
  isDrawing = false
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
canvas.addEventListener('mousemove', draw);