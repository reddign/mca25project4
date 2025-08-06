const canvas = document.querySelector("canvas");
const graphics = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let playerX = -100;
let playerY = -100;

// let readytoEcholocate = false
let lost=0;

let op=1;
//op for opacity

let isColliding = false;
let fadeDuration = 3333; // Fade duration in milliseconds

// document.addEventListener('keydown', function(event) {
//     if (event.key === ' ' && readytoEcholocate==true) {
//         op=1
//         readytoEcholocate=false
//     } // spacebar (' ') attempts to turn on echolocation
// });

function block(x, y, w, h, op){
    graphics.fillStyle="RGB(" + (op * 255) + ", " + (op * 255) + ", " + (op * 255) + ")";
    graphics.fillRect(x, y, w, h);

    if(playerX > x
    && playerX < x + w
    && playerY > y
    && playerY < y + h) {
        isColliding = true;
    }
}

let zero;
requestAnimationFrame(firstFrame);
function firstFrame(timestamp) {
    zero = timestamp;
    animate(timestamp);
}
function animate(timestamp) {
    const value = (timestamp - zero) / fadeDuration;
    if (value < 1) {
        op = 1 - value;
    } else op = 0;
    clear();
    drawPlayer();
    graphics.fillStyle="white";
    graphics.fillRect(canvas.width*(3/4),canvas.height*(9/40),canvas.width/20,canvas.width/20);
    drawMaze();
    console.log(isColliding);
    if(isColliding==false) {
        requestAnimationFrame(animate);
    }
}

function clear(){
    graphics.fillStyle="black";
    graphics.fillRect(0,0,canvas.width,canvas.height);
}

function drawMaze(){
    // Maze borders
    block(0, 0, canvas.width, canvas.width/30, op);
    block(0, 0, canvas.width/30, canvas.height, op);
    block(0, canvas.height-(canvas.width/30), canvas.width, canvas.width/30, op);
    block(canvas.width-(canvas.width/30), 0, canvas.width/30, canvas.height, op);
    // Maze walls
    block(canvas.width/6, (canvas.height/2)-(canvas.width/60), canvas.width*(5/6), canvas.width/30, op);
    block(canvas.width/3, (canvas.height/2)-(canvas.width/60), canvas.width/30, canvas.height*(13/40), op);
    block(canvas.width/6, 0, canvas.width/30, canvas.height/5, op);
    block(canvas.width/2, canvas.height/10, canvas.width/30, canvas.height*(13/40), op);
}

function drawPlayer(){
    graphics.fillStyle="yellow"; //color can be changed
    graphics.fillRect(playerX - 5, playerY - 5, 10, 10);
}

function movePlayer(e){
    playerY = e.offsetY;
    playerX = e.offsetX;

    if(playerX>450 && playerX<480 && playerY>90 && playerY<120){
        console.log("Win");
    }
}

//todo: make a starting square so players dont teleport, detect walls to direct players to the start