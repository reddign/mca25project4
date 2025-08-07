let canvas = document.querySelector("canvas")
let graphics = canvas.getContext("2d")
graphics.fillstyle = "black"
let moved = 0
let clicked = 0
let total = 0
let nothingscore = 0

graphics.fillText("Do Nothing", canvas.width / 2, canvas.height / 2)

setTimeout(
    function(){
        total = moved + clicked
        if(total < 50)
        {
        graphics.fillText("Good Job!", canvas.width / 2, canvas.height / 2 + 20)
        nothingscore = (50 - total) * 10
        }
        else
        {
        graphics.fillText("Oops", canvas.width / 2, canvas.height / 2 + 20)

        }
        }, 2500);


document.addEventListener('mousemove', function(event) {
    console.log("move");
    moved += 1
    
});

document.addEventListener('click', function(event) {
    console.log("click");
    clicked += 1
});

