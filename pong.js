console.log("Hello. Do you want to play with me?")
const audio = new Audio("http://127.0.0.1/mca/Paint/random.wav")
let canvas = document.querySelector("canvas")
let graphics = canvas.getContext("2d")

let lives = 3
let score = 0

let x = 30
let y = 100
let fps = 5
let spd = 1
let dir1 = 1
let dir2 = 1
let r = 7.5
let scoreSent = false

function scoreboard()
    {
        graphics.fillstyle = "white"
        let scoreString = "Lives: " + lives + " Score: " + score
        graphics.fillText(scoreString, 10, 10)
    }

/*function death()
{
    console.log("game over, man")
    graphics.fillstyle = "white"
    let endString = "Game over. Score: " + score
    graphics.fillText(endString, 30, 30)
    alert("Game over. Points: " + score + ". Hit refresh, then click ''OK'' to play again")
}*/
function animate()
{
    if(lives > 0)
    {
    clear()
    ball()
    paddle()
    moveBall()
    bounceBall()
    scoreboard()
    if(!scoreSent && lives < 1)
    {
        sendscore()
        scoreSent = true
    }
    }
    if (lives == 0)
    {
    clear()
    lives--
    }
}
let endstringlength = 0
function clear()
{
    graphics.fillStyle = "black"
    graphics.fillRect(0,0,canvas.width, canvas.height)
    if (lives < 1)
    {
        graphics.fillStyle = "white"
        var endString = "Game over. Score: " + score
        endstringlength = endString.length
        graphics.fillText(endString, 10, 15)
        undead()
        retry()
    }
}

function undead()
{
    graphics.fillStyle = "white"
    graphics.fillRect(10, 25, 107.5, 20)
    graphics.fillStyle = "black"
    graphics.fillText("Play Again?", 10 + (107.5/4) , 25 + (20/1.5))
}

function retry(v)
{
    let canvasrect = canvas.getBoundingClientRect()
    let vx = v.clientX - canvasrect.x
    let vy = v.clientY - canvasrect.y
    if(vx > 40 && vy > 55 && vx < 350 && vy < 115)
    {
        lives = 3
        score = 0
        x = 30
        y = 100
        animate()
    }
    else
    {
        console.log("nope")
    }
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
paddleheight = 40

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
        lives -= 1
        console.log(lives)
        x = Math.random() * 100 + 25
        y = Math.random() * 100 + 25
        dir1 = 1
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
        score += 500
        dir1 *= -1
        dir2 *= -1
        audio.play()
    }

}

function movepaddle(e)
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

    function sendscore()
    {
        console.log("lives", lives, "score", score)
    }

    window.setInterval(animate, fps/2000)