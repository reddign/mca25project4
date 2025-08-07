let canvas = document.querySelector("canvas");
let graphics = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 50
let y = 50
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
    graphics.arc(x,y,15,0, Math.PI * 2)
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
    (randomaze==1 && ((x > 600 && x < 620 && y > 0 && y < 200) ||
        (x > 600 && x < 620 && y > 450 && y < 650) ||
        (x > 850 && y > 400 && x < 870 && y < 500) ||
        (x > 1100 && y > 0 && x < 1120 && y < 300) ||
        (x > 1100 && y > 300 && x < 20 && y < 400) ||
        (x > 1400 && y > 90 && x < 20 && y < 650) ||
        (x > 1400 && y > 400 && x < 20 && y < 650)) )
        ||
    (randomaze==2 && ((x > 600 && y > 200 && x < 900 && y < 400) || 
        (x > 1000 && y > 100 && x < 1040 && y < 140) ||
        (x > 1000 && y > 450 && x < 900 && y < 400) ||
        (x > 400 && y > 100 && x < 440 && y < 140) ||
        (x > 400 && y > 450 && x < 440 && y < 490) ||
        (x > 1200 && y > 50 && x < 1240 && y < 90) ||
        (x > 1200 && y > 500 && x < 1240 && y < 540)))
        ||
    (randomaze==3 && 
        ((x > 300 && y > 100 && x < 1300 && y < 120) ||
        (x > 300 && y > 500 && x < 1300 && y < 520) ||
        (x > 600 && y > 250 && x < 1300 && y < 270) ||
        (x > 600 && y > 300 && x < 1300 && y < 370)))
    ||  (y < 15) || (y > canvas.height - 15)    )
    {
        x = 50
        y = 50
        spd = 1
        dir = 1
    }
    if (x < 1475)
    {
        y += dir * 2
        x += spd
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
        graphics.fillRect(600,0,20,200)
        graphics.fillRect(600,450,20,200)

        graphics.fillRect(850,400,20,100)

        graphics.fillRect(1100,0,20,300)
        graphics.fillRect(1100,300,20,100)

        graphics.fillRect(1400,90,20,100)
        graphics.fillRect(1400,400,20,250)

    }
    if(randomaze == 2)
    {
        graphics.fillRect(600,200,300,200)
        graphics.fillRect(1000, 100, 40,40)
        graphics.fillRect(1000, 450, 40,40)
        graphics.fillRect(400, 100, 40,40)
        graphics.fillRect(400, 450, 40,40)
        graphics.fillRect(1200, 50, 40,40)
        graphics.fillRect(1200, 500, 40,40)
    }
    if(randomaze == 3)
    {
        graphics.fillRect(300, 100,1000,20)
        graphics.fillRect(300, 500,1000,20)
        
        graphics.fillRect(600, 250,700,20)
        graphics.fillRect(600, 350,700,20)
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