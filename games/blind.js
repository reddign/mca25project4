let playerX = -100;
let playerY = -100;

let op = 1; // op for opacity

let isColliding = false;
let fadeDuration = 3333; // Fade duration in milliseconds

let zero;

function blindInit() {
    requestAnimationFrame(blindAnimate);
}

function blindAnimate(timestamp) {
    const value = (timestamp - zero) / fadeDuration;
    if (value < 1) {
        op = 1 - value;
    } else op = 0;
    blindClear();
    graphics.fillStyle="lime";
    graphics.fillRect(canvas.width*(43/60), (canvas.height/4)-(canvas.width/60), canvas.width/20, canvas.width/20);
    drawMaze();
    drawPlayer();
    if(isColliding == true) {
        isColliding = false;
        playerX = canvas.width*(89/120);
        playerY = (canvas.height*(3/4))-(canvas.width/120);
        zero = timestamp;
    }
    requestAnimationFrame(blindAnimate);
}

function blindClear() {
    graphics.fillStyle="black";
    graphics.fillRect(0, 0, canvas.width, canvas.height);
}

function drawMaze() {
    // Maze borders
    block(0, 0, canvas.width, canvas.width/30, op);
    block(0, 0, canvas.width/30, canvas.height, op);
    block(0, canvas.height-(canvas.width/30), canvas.width, canvas.width/30, op);
    block(canvas.width*(29/30), 0, canvas.width/30, canvas.height, op);
    // Maze walls
    block(canvas.width/6, (canvas.height/2)-(canvas.width/60), canvas.width*(5/6), canvas.width/30, op);
    block(canvas.width/3, canvas.height/2, canvas.width/30, (canvas.height/3)-(canvas.width/30), op);
    block(canvas.width/6, 0, canvas.width/30, (canvas.height/3)-(canvas.width/60), op);
    block(canvas.width*(29/60), (canvas.height/12)+(canvas.width/30), canvas.width/30, (canvas.height/3)-(canvas.width*(3/60)), op);
}

function block(x, y, w, h, op) {
    graphics.fillStyle=`RGB(${op*255}, ${op*255}, ${op*255})`;
    graphics.fillRect(x, y, w, h);

    if(playerX > x
    && playerX < x + w
    && playerY > y
    && playerY < y + h) {
        isColliding = true;
    }
}

function drawPlayer() {
    graphics.fillStyle = "yellow"; // Color can be changed
    graphics.fillRect(playerX - canvas.width/120, playerY - canvas.width/120, canvas.width/60, canvas.width/60);
}

canvas.addEventListener("mousemove", (e) => {
    if(document.pointerLockElement) {
        playerX += e.movementX;
        playerY += e.movementY;
        if(playerX < 0) {
            playerX = 0;
        } else if(playerX > canvas.width) {
            playerX = canvas.width;
        }
        if(playerY < 0) {
            playerY = 0;
        } else if(playerY > canvas.height) {
            playerY = canvas.height;
        }
    } else {
        playerY = e.offsetY;
        playerX = e.offsetX;
    }

    if(playerX > canvas.width*(43/60)
    && playerX < canvas.width*(23/30)
    && playerY > (canvas.height/4)-(canvas.width/60)
    && playerY < (canvas.height/4)+(canvas.width/40)) {
        console.log("Win");
    }
});