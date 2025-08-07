let canvas = document.querySelector("canvas"); 
const graphics = canvas.getContext("2d");

let selected = false

let redwireCut = false
    let bluewireCut = false
    let greenwireCut = false
    let yellowwireCut = false
let wiregameDone = false

let bgTimer = 0
let bgCanBeReleased = false
let buttongameDone = false

// coords for bomb itself
let BBx = 100
let BBy = 100
let BBw = 400
let BBh = 150

function gameloop(){
    bombBase()
    wirecutGame()
    buttonGame()
}


function select(event){
    selected = true
let mousex = event.offsetX
let mousey = event.clientY
wirecutGame(mousex,mousey)
buttonGame(mousex,mousey)

}
function unselect(event){
    selected = false
}
    
bombBase()
function bombBase(){
    graphics.fillStyle= "#4f4e54"
    graphics.fillRect(BBx,BBy,BBw,BBh) // main block

    graphics.fillStyle="#717178"
    graphics.fillRect((canvas.width/2)-2,BBy,4,BBh) //line between modules
    
}


function buttonGame(mousex,mousey){ //hold button until it says release
    // the timer for this (" bgTimer ") is dependent on the frame rate, NOT actual time. i couldn't get it to work.
    const bGx = 400
    const bGy = 190

    if(selected==false){
        bgText = "HOLD THE BUTTON"
    }
    
if(selected==true && mousex>bGx-40 && mousex<bGx+40
        && mousey>bGy-40 && mousey<bGy+40
    ){
        bgText="Wait..."
    }
if(bgText=="Wait..." || bgText=="RELEASE" && selected==true){
    bgTimer++
}
if(bgTimer==15){
    bgText = "RELEASE"
    bgCanBeReleased = true
}else if(bgTimer==20){
    bgText="Wait..."
    bgTimer = 0
    bgCanBeReleased = false
}
if(bgCanBeReleased==true && selected==false){
    buttongameDone = true
}
if(buttongameDone==true){
    bgTimer = 0
    bgText = "Good!"
    graphics.fillStyle="#3bfc14"
        graphics.fillRect(310,105,20,20)
}

    graphics.fillStyle="red"
    graphics.beginPath()
    graphics.arc(bGx,bGy,40,0,Math.PI*2)
    graphics.fill()
    graphics.closePath() //button

    graphics.fillStyle = "black"
    graphics.fillRect(bGx-60,bGy-75,120,30) // text screen

    graphics.fillStyle = "white"
    graphics.font = '13px monospace'
    graphics.fillText(bgText,bGx-55,bGy-55) // text

    
}


function wirecutGame(mousex,mousey){ // cut all the wires
    

    let wcGx = 125
    let wcGy = 130
    let wcGw = 150
    let wcGh = 100
    let wcGtext = "CUT THE WIRES"

    graphics.fillStyle = "black"
    graphics.fillRect(wcGx,wcGy,wcGw,wcGh)

    graphics.fillStyle = "red"
    graphics.fillRect(wcGx+15,wcGy+15,120,10)
    graphics.fillStyle = "blue"
    graphics.fillRect(wcGx+15,wcGy+35,120,10)
    graphics.fillStyle = "green"
    graphics.fillRect(wcGx+15,wcGy+55,120,10)
    graphics.fillStyle = "yellow"
    graphics.fillRect(wcGx+15,wcGy+75,120,10)

    
   

    // graphics.fillStyle = "white"
    // graphics.fillRect(wcGx+5,wireLighty,20,20)

    if(mousex>wcGx+10 && mousex<wcGx+140
        && mousey>wcGy+20 && mousey<wcGy+35
    ){
        redwireCut = true
    }
    if(mousex>wcGx+10 && mousex<wcGx+140
        && mousey>wcGy+40 && mousey<wcGy+55
    ){
        bluewireCut = true
    }
    if(mousex>wcGx+10 && mousex<wcGx+140
        && mousey>wcGy+60 && mousey<wcGy+75
    ){
        greenwireCut = true
    }
    if(mousex>wcGx+10 && mousex<wcGx+140
        && mousey>wcGy+80 && mousey<wcGy+95
    ){
        yellowwireCut = true
    }
    
    if(redwireCut==true){
        graphics.fillStyle = "black"
        graphics.fillRect(wcGx+25,wcGy+15,100,10)
    }
    if(bluewireCut==true){
        graphics.fillStyle = "black"
        graphics.fillRect(wcGx+25,wcGy+35,100,10)
    }
    if(greenwireCut==true){
        graphics.fillStyle = "black"
        graphics.fillRect(wcGx+25,wcGy+55,100,10)
    }
    if(yellowwireCut==true){
        graphics.fillStyle = "black"
        graphics.fillRect(wcGx+25,wcGy+75,100,10)
    }
    if(redwireCut==true && bluewireCut==true && greenwireCut==true && yellowwireCut==true){
        wiregameDone = true
    }

    if(wiregameDone==true){ // green done light, change text
        graphics.fillStyle="#3bfc14"
        graphics.fillRect(105,105,20,20)
        wcGtext = "Good!"
    }

graphics.fillStyle = "black"
    graphics.fillRect(wcGx+15,wcGy-25,120,20) //text screen

    graphics.fillStyle = "white"
    graphics.font = '13px monospace'
    graphics.fillText(wcGtext,wcGx+25,wcGy-10) //text
    
}


// TO COMPLETE THE GAME, variables " wirecutDone " and " buttongameDone " will be set to " true ".


window.setInterval(gameloop,100)
