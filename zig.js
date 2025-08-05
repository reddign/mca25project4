let canvas = document.querySelector("canvas")
let graphics = canvas.getContext("2d")


let x = 150
let y = 350
let fps = 5
let dir = 1

function ball()
{
    graphics.fillStyle = "white"
    graphics.beginPath()
    graphics.arc(x,y,20,0, Math.PI * 2)
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
    console.log("confirm")
}

function move()
{
    y += dir * 2
    x += 
}

function animate()
{
    clear()
    ball()
    move()
    console.log(dir)
}

window.setInterval(animate, fps/2000)