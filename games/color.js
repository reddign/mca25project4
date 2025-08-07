let canvas = document.querySelector("canvas")
let graphics = canvas.getContext("2d")
graphics.strokeStyle = "black"

let randx = Math.round(Math.random() * (canvas.width - 100) + 50)
let randy = Math.round(Math.random() * (canvas.height - 100) + 50)

let done = 0

graphics.strokeRect(randx,randy,50,50)


function paint(event)
{
    let canvasrect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasrect.x
    let y = event.clientY - canvasrect.y
        draw(x, y)
}

function see(event)
{
    if (pixel.data == "rgb(0,255,0)")
    {
        console.log("yes")
        done = 1
    }
    else
    {
        console.log("no")
    }
}

function draw(x, y)
{
    graphics.fillStyle = "rgb(0,255,0)"
    graphics.fillRect(x, y, 13, 13)
    let imageData = graphics.getImageData(randx + 1, randy +1, 48, 48);
    let pixel = imageData.data;
}

