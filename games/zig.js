let canvas = document.querySelector("canvas");
let graphics = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let zigX = 50
let zigY = 50
let fps = 5
let dir = 1
let spd = 1
let win = 0

graphics.fillStyle = "lime"
graphics.fillRect(1300,0,100,canvas.height)

function ball()
{
    graphics.fillStyle = "yellow"
    graphics.beginPath()
    graphics.arc(zigX, zigY, 15,0, Math.PI * 2)
    graphics.fill()
    graphics.closePath()
}

function clear()
{
    graphics.fillStyle = "black"
    graphics.fillRect(0,0,canvas.width, canvas.height)
}

canvas.addEventListener("mousedown", () => {
    dir *= -1
    spd += 0.25
});

function move()
{
    if(
    (randomaze==1 && ((zigX > 600 && zigX < 620 && zigY > 0 && zigY < 200) ||
        (zigX > 600 && zigX < 620 && zigY > 450 && zigY < 650) ||
        (zigX > 850 && zigY > 400 && zigX < 870 && zigY < 500) ||
        (zigX > 1100 && zigY > 0 && zigX < 1120 && zigY < 300) ||
        (zigX > 1100 && zigY > 300 && zigX < 20 && zigY < 400) ||
        (zigX > 1400 && zigY > 90 && zigX < 20 && zigY < 650) ||
        (zigX > 1400 && zigY > 400 && zigX < 20 && zigY < 650)) )
        ||
    (randomaze==2 && ((zigX > 600 && zigY > 200 && zigX < 900 && zigY < 400) || 
        (zigX > 1000 && zigY > 100 && zigX < 1040 && zigY < 140) ||
        (zigX > 1000 && zigY > 450 && zigX < 900 && zigY < 400) ||
        (zigX > 400 && zigY > 100 && zigX < 440 && zigY < 140) ||
        (zigX > 400 && zigY > 450 && zigX < 440 && zigY < 490) ||
        (zigX > 1200 && zigY > 50 && zigX < 1240 && zigY < 90) ||
        (zigX > 1200 && zigY > 500 && zigX < 1240 && zigY < 540)))
        ||
    (randomaze==3 && 
        ((zigX > 300 && zigY > 100 && zigX < 1300 && zigY < 120) ||
        (zigX > 300 && zigY > 500 && zigX < 1300 && zigY < 520) ||
        (zigX > 600 && zigY > 250 && zigX < 1300 && zigY < 270) ||
        (zigX > 600 && zigY > 300 && zigX < 1300 && zigY < 370)))
    ||  (zigY < 15) || (zigY > canvas.height - 15)    )
    {
        zigX = 50
        zigY = 50
        spd = 1
        dir = 1
    }
    if (zigX < 1475)
    {
        zigY += dir * 2
        zigX += spd
    }
    else
    {
    win = 1
    }

}

let randomaze = Math.round(Math.random() * 3)


function maze()
{
    graphics.fillStyle = "white"
    if(randomaze != 1 && randomaze != 2 && randomaze != 3)
    {
        randomaze = 1
    }
    if(randomaze == 1)
    {
        block(canvas.width*(6/15),0,canvas.width/60,200)
        block(600,450,20,200)

        block(850,400,20,100)

        block(1100,0,20,300)
        block(1100,300,20,100)

        block(1400,90,20,100)
        block(1400,400,20,250)

    }
    if(randomaze == 2)
    {
        block(600,200,300,200)
        block(1000, 100, 40,40)
        block(1000, 450, 40,40)
        block(400, 100, 40,40)
        block(400, 450, 40,40)
        block(1200, 50, 40,40)
        block(1200, 500, 40,40)
    }
    if(randomaze == 3)
    {
        block(300, 100,1000,20)
        block(300, 500,1000,20)
        
        block(600, 250,700,20)
        block(600, 350,700,20)
    }
}

function zigBlock(x, y, w, h) {
    graphics.fillStyle = "white";
    graphics.fillRect(x, y, w, h);

    if(zigX > x
    && zigX < x + w
    && zigY > y
    && zigY < y + h) {
        isColliding = true;
    }
}

function animatezig()
{
    clear()
    pixel = graphics.getImageData(x, y, 1, 1).data
    graphics.fillStyle = "rgb(0,255,0)"
    graphics.fillRect(1450,0,50,canvas.height)
    graphics.fillStyle = "white"
    graphics.fillRect(0,0,canvas.width, 15)
    graphics.fillRect(0,canvas.height - 15,canvas.width, 15)
    maze()
    ball()
    move()
}
    console.log(graphics.getImageData(601, 1, 1, 1))
window.setInterval(animatezig, fps/2000)