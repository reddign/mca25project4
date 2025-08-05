let canvas = document.querySelector("canvas"); 
const graphics = canvas.getContext("2d");

let playerX = -100
let playerY = -100

let readytoEcholocate = false
let lost=0

let i=0
let op=0 //op for opacity



document.addEventListener('keydown', function(event) {
    if (event.key === ' ' && readytoEcholocate==true) {
        op=1
        readytoEcholocate=false
    } // spacebar (' ') attempts to turn on echolocation
});


function block(x,y,w,h,op){
    // 1--creates invisible block
    graphics.fillStyle= "RGB(0,0,10)"
    graphics.fillRect(x,y,w,h)

    //2--creates visible block thats only opaque when op=1
    graphics.fillStyle="RGB(230,230,230," + op + ")"
    graphics.fillRect(x,y,w,h)
}

function timer(){ // timer separate from game's framerate, controls when echolocation is available
    if (i==5){
            i = 0
            readytoEcholocate = true
            // makes echolocation available after 5 ticks
        }else if(i==2){
                op=0 // turns off the walls after 2 ticks
                readytoEcholocate=false
            }
        if(readytoEcholocate==false){
            i++ //makes sure the timer stops when echolocate is available
        }
            console.log(i,readytoEcholocate); //can be removed, just making sure the timer is working
            
}
timer()


function gameloop(){
    clear()
  
    drawPlayer()
    if(readytoEcholocate==true){
    graphics.fillStyle="red"
    graphics.fillRect(20,20,20,20,1) //indicator for when echolocate is ready

}graphics.fillStyle="white"
graphics.fillRect(450,90,30,30,1)
drawMaze()

}



function win(e){
    let winX=e.offsetX
    let winY=e.offsetY
    if(winX>450 && winX<480 && winY>90 && winY<120){
        console.log("Win")
    } //creates a "win." can be changed to check for a specific color of win location, or other coordinates
}


function clear(){
    graphics.fillStyle="black"
    graphics.fillRect(0,0,canvas.width,canvas.height)
}

function drawMaze(){
    block(0,0,canvas.width,20,op)
    // borders of the maze
    block(100,200,700,20,op)
    block(0,0,20,canvas.height,op)
    block(0,canvas.height-20,canvas.width,20,op)
    block(canvas.width-20,0,20,canvas.height,op)

    block(100,0,20,120,op)
    block(200,200,20,130,op)
    block(300,40,20,130,op)
}

function drawPlayer(){

    graphics.fillStyle="yellow" //color can be changed
    graphics.fillRect(playerX,playerY,10,10)
}
function movePlayer(e){
    playerY = e.offsetY;
    playerX = e.offsetX;

    const pixelColor = canvas.getContext('2d')
    let imageData = pixelColor.getImageData(playerX,playerY,1,1)
    let pixel = imageData.data;
    let isNotWall = (pixel[0]==0 && pixel[1]==0 && pixel[2]==0)
    let isPlayer = (pixel[0]==255 && pixel[1]==255 && pixel[2]==0)
    let isTimer = (pixel[0]==255 && pixel[1]==0 && pixel[2]==0)
    
}



window.setInterval(gameloop,60)
window.setInterval(timer,1000)