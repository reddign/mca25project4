let canvas = document.querySelector("canvas"); 
const graphics = canvas.getContext("2d");

let playerX = -100;
let playerY = -100;

// let readytoEcholocate = false
let lost=0;

let i=0;
let op=1;
//op for opacity

// document.addEventListener('keydown', function(event) {
//     if (event.key === ' ' && readytoEcholocate==true) {
//         op=1
//         readytoEcholocate=false
//     } // spacebar (' ') attempts to turn on echolocation
// });

function block(x,y,w,h,op){
    // 1--creates invisible block
    graphics.fillStyle= "RGB(0,0,10)";
    graphics.fillRect(x,y,w,h);

    //2--creates visible block thats only opaque when op=1
    graphics.fillStyle="RGB(230,230,230," + op + ")";
    graphics.fillRect(x,y,w,h);
}

let zero;
requestAnimationFrame(firstFrame);
function firstFrame(timestamp) {
    zero = timestamp;
    animate(timestamp);
}
function animate(timestamp) {
    const value = (timestamp - zero) / 3333;
    if (value < 1) {
        op = 1 - value;
    } else op = 0;
    clear();
    drawPlayer();
    graphics.fillStyle="white";
    graphics.fillRect(450,90,30,30,1);
    drawMaze();
    requestAnimationFrame(animate);
}

function clear(){
    graphics.fillStyle="black";
    graphics.fillRect(0,0,canvas.width,canvas.height);
}

function drawMaze(){
    block(0,0,canvas.width,20,op);
    // borders of the maze
    block(100,200,700,20,op);
    block(0,0,20,canvas.height,op);
    block(0,canvas.height-20,canvas.width,20,op);
    block(canvas.width-20,0,20,canvas.height,op);

    block(100,0,20,120,op);
    block(200,200,20,130,op);
    block(300,40,20,130,op);
}

function drawPlayer(){
    graphics.fillStyle="yellow"; //color can be changed
    graphics.fillRect(playerX,playerY,10,10);
}

function movePlayer(e){
    playerY = e.offsetY;
    playerX = e.offsetX;

    const pixelColor = canvas.getContext('2d');
    let imageData = pixelColor.getImageData(playerX,playerY,1,1);
    let pixel = imageData.data;
    let isNotWall = (pixel[0]==0 && pixel[1]==0 && pixel[2]==0);
    let isPlayer = (pixel[0]==255 && pixel[1]==255 && pixel[2]==0);
    let isTimer = (pixel[0]==255 && pixel[1]==0 && pixel[2]==0);

    if(playerX>450 && playerX<480 && playerY>90 && playerY<120){
        console.log("Win");
    }
}