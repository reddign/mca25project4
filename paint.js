console.log("The first level in Sonic games got me like")
let canvas = document.querySelector("canvas")
let graphics = canvas.getContext("2d")
let color = "black"
// open/closed square/circle
let paintmode = "squareOpen"
let size = 5;
drawCanvas()

const audio = new Audio("http://127.0.0.1/mca/Paint/random.wav")

paint()


function paint(event)
{
    let canvasrect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasrect.x
    let y = event.clientY - canvasrect.y
    if(x <= 40 && y <= 160)
    {
        setDrawMode(x, y) 
    }
    else
    {
        draw(x, y)
        audio.play()
    }
}

function draw(x, y)
{
    graphics.fillStyle = color
    // graphics.fillRect(x, y, size, size)
    if(paintmode == "squareOpen")
    {
        graphics.fillRect(x, y, size, size)
    }
    else if(paintmode == "squareClosed")
    {
        graphics.fillRect(x, y, size, size)
        graphics.strokeRect(x, y, size, size)
    }
    else if(paintmode == "circleOpen")
    {
        graphics.beginPath()
        graphics.arc(x, y, size/2, 0, Math.PI * 2.0)
        graphics.fill()
        graphics.closePath()
    }
    else
    {
        graphics.beginPath()
        graphics.arc(x, y, size/2, 0, Math.PI * 2.0)
        graphics.fill()
        graphics.stroke()
        graphics.closePath()
    }
}

function drawCanvas()
{
graphics.fillStyle = "white"
graphics.strokeStyle = "black"
graphics.fillRect(0, 0, canvas.width, canvas.height)
graphics.strokeRect(0, 0, canvas.width, canvas.height)
toolPalette()
}

function toolPalette()
{
    graphics.fillStyle = "black"
    graphics.fillRect(0, 0, 20, 20)
    graphics.fillStyle = "red"
    graphics.fillRect(20, 0, 20, 20)
    graphics.fillStyle = "orange"
    graphics.fillRect(0, 20, 20, 20)
    graphics.fillStyle = "yellow"
    graphics.fillRect(20, 20, 20, 20)
    graphics.fillStyle = "green"
    graphics.fillRect(0, 40, 20, 20)
    graphics.fillStyle = "lime"
    graphics.fillRect(20, 40, 20, 20)
    graphics.fillStyle = "blue"
    graphics.fillRect(0, 60, 20, 20)
    graphics.fillStyle = "skyBlue"
    graphics.fillRect(20, 60, 20, 20)
    graphics.fillStyle = "purple"
    graphics.fillRect(0, 80, 20, 20)
    graphics.fillStyle = "blueViolet"
    graphics.fillRect(20, 80, 20, 20)
    graphics.fillStyle = "violet"
    graphics.fillRect(0, 100, 20, 20)
    graphics.fillStyle = "pink"
    graphics.fillRect(20, 100, 20, 20)



    //function squaremode()
    //square in square
    graphics.fillStyle = "white"
    graphics.strokeStyle = "black"
    graphics.strokeRect(20,120,20,20)
    graphics.strokeRect(4,124,12,12)


    //function circlemode()
    //circle mode; circle in square

    graphics.strokeStyle = "red"
    graphics.strokeRect(20,120,20,20)
    graphics.beginPath()
    graphics.arc(30,130,6, 0, Math.PI * 2.0)
    graphics.stroke()
    graphics.closePath()

    //size changer

    graphics.fillStyle = "black"
    graphics.strokeStyle = "black"
    graphics.strokeRect(0, 140, 20, 20)
    graphics.strokeText("/\\", 6.5, 152.5)

    //Erazer

    graphics.fillStyle = "white"
    graphics.strokeStyle = "black"
    graphics.strokeRect(20,140,20,20)
    graphics.moveTo(20,160)
    graphics.lineTo(40,140)
    graphics.fill()
    graphics.stroke()

}

function setDrawMode(x, y)
{
    if(x < 20)
    {
        if(y < 20)
        {
        color = "black"
        }
        else if(y < 40)
        {
        color = "orange"
        }
        else if(y < 60)
        {
        color = "green"
        }
        else if(y < 80)
        {
        color = "blue"
        }
        else if(y < 100)
        {
        color = "purple"
        }
        else if(y < 120)
        {
        color = "violet"
        }
        else if (y < 140)
        {
            if (paintmode == "squareClosed")
            {
                paintmode = "squareOpen"
            }
            else
            {
                paintmode = "squareClosed"
            }
        }
        else
        {
        size = prompt("change brush size to what? (default is 5)")
        }
    }
    else if (x < 40)
    {
        if(y < 20)
        {
        color = "red"
        }
        else if(y < 40)
        {
        color = "yellow"
        }
        else if(y < 60)
        {
        color = "lime"
        }
        else if(y < 80)
        {
        color = "skyBlue"
        }
        else if(y < 100)
        {
        color = "blueViolet"
        }
        else if(y < 120)
        {
        color = "pink"
        }
        else if (y < 140)
        {
            if (paintmode == "circleClosed")
                {
                    paintmode = "circleOpen"
                }
            else
                {
                    paintmode = "circleClosed"
                }
        }
        else
        {
        color = "white"
        }
    }
}