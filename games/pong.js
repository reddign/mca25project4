let canvas = document.querySelector("canvas")
let graphics = canvas.getContext("2d")

let bounces = 0
let x = 30
let y = 100
let fps = 5
let spd = 0.5
let dir1 = 1
let dir2 = 1
let r = 7.5

export function animatepong()
{
    if(bounces < 5)
    {
    clear()
    ball()
    paddle()
    moveBall()
    bounceBall()
    }
    else
    {
    clear()
    }
}
let endstringlength = 0
function clear()
{
    graphics.fillStyle = "black"
    graphics.fillRect(0,0,canvas.width, canvas.height)
    if (bounces >= 5)
    {
        graphics.fillStyle = "white"
        var endString = "Nice!"
        endstringlength = endString.length
        graphics.fillText(endString, 10, 15)
    }
}

function undead()
{
    graphics.fillStyle = "white"
    graphics.fillRect(10, 25, 107.5, 20)
    graphics.fillStyle = "black"
    graphics.fillText("Play Again?", 10 + (107.5/4) , 25 + (20/1.5))
}

function ball()
{
    graphics.fillStyle = "white"
    graphics.beginPath()
    graphics.arc(x,y,r,0, Math.PI * 2)
    graphics.fill()
    graphics.closePath()
}

paddlex = 250
paddley = 30
paddlewidth = 10
paddleheight = 35

function paddle()
{
    graphics.fillStyle = "white"
    graphics.fillRect(paddlex, paddley, paddlewidth, paddleheight)
}

function moveBall()
{
    x += spd * dir1
    y += spd * dir2
}

function bounceBall()
{
    if (x - r < 0)
    {
        dir1 *= -1
    }
    if (x + r > canvas.width)
    {
        x = Math.random() * 100 + 25
        y = Math.random() * 100 + 25
        dir1 = 1
        spd = 0.5
    }
    if (y + r > canvas.height || y - r < 0)
    {
        dir2 *= -1
    }
    if(x+r > paddlex && x+r < paddlex +paddlewidth
        && y +r > paddley && y+r < paddley + paddleheight ||
        x+r > paddlex && x+r < paddlex +paddlewidth
        && y -r > paddley && y-r < paddley + paddleheight)
    {
        dir1 *= -1
        dir2 *= -1
        bounces++
        spd *= 1.5
    }

}

function move(e)
    {
    let thing = canvas.getBoundingClientRect()
    paddley = e.clientY - paddleheight * 2 - thing.y
    if (paddley < 0)
    {
        paddley = 0
    }
    if (paddley + paddleheight > canvas.height)
    {
        paddley = canvas.height - paddleheight
    }
    }

    window.setInterval(animatepong, fps/2000)