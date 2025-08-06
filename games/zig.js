let canvas = document.querySelector("canvas")
let graphics = canvas.getContext("2d")

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

function changesthings(event)
{
    dir = dir * -1
    spd += 0.25
}

function move()
{
    if (x < 1475)
    {
    y += dir * 2
    x += spd
    }
    else
    {

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
    graphics.fillStyle = "lime"
    graphics.fillRect(1450,0,50,canvas.height)
    graphics.fillStyle = "white"
    graphics.fillRect(0,0,canvas.width, 15)
    graphics.fillRect(0,canvas.height - 15,canvas.width, 15)
    maze()
    ball()
    move()
}
    console.log(graphics.getImageData(x, y, 1, 1))
window.setInterval(animatezig, fps/2000)