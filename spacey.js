let canvas = document.querySelector("canvas")
let graphics = canvas.getContext("2d")
let alienimg = document.getElementById("aliens")
let shipimg = document.getElementById("spaceShip")
let shipx = 500
let shipy = 400
let FPS = 60
let bullets = [[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1]]
let bulletsFired = 0
let alienx = 100 //omg Ben 10 reference that's sick dude holy-
let alieny = 100

let invasion = [
    [0,1,2,3,3,2,1,0], //1
    [1,2,3,4,4,3,2,1], //2
    [2,3,4,4,4,4,3,2], //3
    [1,2,3,4,4,3,2,1], //4
    [0,1,2,3,3,2,1,0]  //5
]

function animate()
{
    clear()
    drawSpaceShip(shipx, shipy)
    drawAliens()
    drawBullets()
    scoreboard()
}

let moveit = 0
let alienspeed = 2
let movin = 1;

function drawAliens()
{
    for (let row = 0; row < 5; row++)
    {
        for(let column = 0; column < 8; column++)
        {
            let whichAlien = invasion[row][column]
            if(whichAlien != 0)
            {
                drawAlien(alienx + column*40, alieny + row*40, whichAlien)
            }
        }
    }
    moveit++
    if(moveit%5 - alienspeed == 0)
    {
        alienx += movin
    }
    if(alienx>=680 || alienx<0)
    {
        movin *= -1
        alieny +=5
        alienspeed++
    }
}

function clear()
{
graphics.fillStyle = "black"
graphics.fillRect(0,0,canvas.width, canvas.height)
}

function moveSpaceShip(event)
{
    shipx = event.offsetX - 12
}

function drawSpaceShip(x, y)
{
graphics.drawImage(spaceShip, x, y, 40, 40)
}

var lives = 3
var score = 0

function scoreboard()
{
    graphics.fillStyle = "white"
    graphics.font = "bold 20px 'Arial', serif"
    let scoreString = " Score: " + score
    graphics.fillText(scoreString, 20, 30)
    for (let i = 1; i <= lives; i++)
    {
        drawSpaceShip(40*i - 30, 40)
    }
}

function bullet(x, y)
{
graphics.fillStyle = "white"
graphics.fillRect(x, y, 4, 12)
}

function drawBullets()
{
    for(let i = 0; i < bullets.length; i++)
    {
        bullet(bullets[i][0], bullets[i][1])
        bullets[i][1]--
    }
}

function fire(event)
{
    bx = event.offsetX
    by = event.offsetY
    bullets[bulletsFired][0] = shipx + 17.9
    bullets[bulletsFired][1] = shipy
    bulletsFired++
    if (bulletsFired >= bullets.length)
    {
        bulletsFired = 0
    }
}

//alien ec
/*
function alienBullet(x, y)
{
graphics.fillStyle = "lime green"
graphics.fillRect(x, y, 4, 12)
}

function drawAlienBullets()
{
    for(let i = 0; i < bullets.length; i++)
    {
        bullet(bullets[i][0], bullets[i][1])
        bullets[i][1]--
    }
}

function alienFire()
{
    abx = 0
    aby = 0
    bullets[bulletsFired][0] = shipx + 17.9
    bullets[bulletsFired][1] = shipy
    bulletsFired++
    if (bulletsFired >= bullets.length)
    {
        bulletsFired = 0
    }
}
*/
// alien ec

function drawAlien(x, y, type)
{
    if (type == 1)
    {
        graphics.drawImage(aliens, 0, 0, 120, 200, x, y, 40, 40)
    }
    else if(type == 2)
    {
        graphics.drawImage(aliens, 120, 0, 155, 200, x, y, 40, 40)
    }
    else if(type == 3)
    {
        graphics.drawImage(aliens, 275, 0, 175, 200, x, y, 40, 40)
    }
    else if(type == 4)
    {
        graphics.drawImage(aliens, 450, 0, 200, 200, x, y, 40, 40)
    }
}

window.setInterval(animate,FPS/1000)