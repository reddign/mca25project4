let bounces = 0;
let x = 30;
let y = 100;
let spd = 6;
let dir1 = 1;
let dir2 = 1;
let r = canvas.width/120;
let paddlex = canvas.width*(7/8);
let paddley = canvas.height/2;
let paddlewidth = canvas.width/60;
let paddleheight = canvas.height/7;

// let oldTimestamp;

function pongInit() {
    requestAnimationFrame(pongAnimate);
}

function pongAnimate(timestamp) {
    if(bounces < 5) {
    pongClear();
    ball();
    paddle();
    moveBall(timestamp);
    bounceBall();
    } else {
    pongClear();
    }
    // oldTimestamp = timestamp;
    requestAnimationFrame(pongAnimate);
}

function pongClear() {
    graphics.fillStyle = "black";
    graphics.fillRect(0, 0, canvas.width, canvas.height);
    if (bounces >= 5) {
        pongScore = Math.floor(spd * 10);
        graphics.textAlign = "center";
        graphics.textBaseline = "middle";
        graphics.fillStyle = "white";
        graphics.font = "30px Arial";
        graphics.fillText(`Nice! Score: ${pongScore}`, canvas.width / 2, canvas.height / 2);
    }
}

function ball() {
    graphics.fillStyle = "white";
    graphics.beginPath();
    graphics.arc(x, y, r, 0, Math.PI * 2);
    graphics.fill();
    graphics.closePath();
}

function paddle() {
    graphics.fillStyle = "white";
    graphics.fillRect(paddlex, paddley - (paddleheight / 2), paddlewidth, paddleheight);
}

function moveBall(timestamp) {
    // const deltaTime = timestamp - oldTimestamp;
    // x += deltaTime * spd * dir1 / 16;
    // y += deltaTime * spd * dir2 / 16;
    x += spd * dir1;
    y += spd * dir2;
}

function bounceBall() {
    if (x - r < 0) {
        dir1 *= -1;
    }
    if (x + r > canvas.width) {
        x = Math.random() * 100 + 25;
        y = Math.random() * 100 + 25;
        dir1 = 1;
        spd /= 1.5;
    }
    if (y + r > canvas.height || y - r < 0) {
        dir2 *= -1;
    }
    if(x+r > paddlex && x+r < paddlex + paddlewidth &&
    (y+r > paddley - (paddleheight / 2) && y+r < paddley + (paddleheight / 2) ||
    y-r > paddley - (paddleheight / 2) && y-r < paddley + (paddleheight / 2))) {
        dir1 *= -1;
        dir2 *= -1;
        bounces++;
        spd *= 1.5;
    }
}

canvas.addEventListener("mousemove", (e) => {
    if(document.pointerLockElement) {
        paddley += e.movementY;
        if(paddley < 0) {
            paddley = 0;
        } else if(paddley > canvas.height) {
            paddley = canvas.height;
        }
    } else {
        paddley = e.offsetY;
    }
});