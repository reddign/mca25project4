/*With Selena's color variable, we could, after the player colors in the object, check each pixel in a 
nested for-loop to see if it's colored, then add to another variable that is compared to the area of the shape 
(probably a square now and not a circle)*/
/*The stamp minigame could either be removed, repurposed, what have you, I'm not sure it's needed*/
let canvas = document.querySelector("canvas")
let graphics = canvas.getContext("2d")
graphics.strokeStyle = "black"
graphics.strokeRect(50,50,50,50)


function paint(event)
{
    let canvasrect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasrect.x
    let y = event.clientY - canvasrect.y
        draw(x, y)
}

function draw(x, y)
{
    graphics.fillStyle = "green"
    graphics.fillRect(x, y, 10, 10)
}

function check()
{

}