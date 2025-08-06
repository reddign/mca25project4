let canvas = document.querySelector("canvas"); 
const graphics = canvas.getContext("2d", {willReadFrequently: true});

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
    graphics.fillRect(playerX - 5, playerY - 5, 10, 10);
}

function movePlayer(e){
    playerY = e.offsetY;
    playerX = e.offsetX;

    const imageData1 = graphics.getImageData(playerX - 6, playerY - 6, 1, 1);
    const pixel0 = imageData1.data;
    const imageData2 = graphics.getImageData(playerX + 6, playerY - 6, 1, 1);
    const pixel1 = imageData2.data;
    const imageData3 = graphics.getImageData(playerX - 6, playerY + 6, 1, 1);
    const pixel2 = imageData3.data;
    const imageData4 = graphics.getImageData(playerX + 6, playerY + 6, 1, 1);
    const pixel3 = imageData4.data;
    const pixels = [pixel0, pixel1, pixel2, pixel3];
    if(pixels[0][0] == 0 && pixels[0][1] == 0 && pixels[0][2] == 0
    && pixels[1][0] == 0 && pixels[1][1] == 0 && pixels[1][2] == 0
    && pixels[2][0] == 0 && pixels[2][1] == 0 && pixels[2][2] == 0
    && pixels[3][0] == 0 && pixels[3][1] == 0 && pixels[3][2] == 0) {
        console.log("Void")
    } else {
        console.log("Wall")
    }

    if(playerX>450 && playerX<480 && playerY>90 && playerY<120){
        console.log("Win");
    }
}

//todo: make a starting square so players dont teleport, detect walls to direct players to the start