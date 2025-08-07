// Initialize canvas
const canvas = document.getElementById("gameDisplay");
const graphics = canvas.getContext("2d");

// Initialize custom cursor
const customCursor = document.getElementById("customCursor");

// Initialize variables
let cursorX;
let cursorY;
let scriptSource;

const games = [
    "pong"
];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
graphics.textAlign = "center";
graphics.textBaseline = "middle";
graphics.font = "30px Arial";
graphics.fillText("Game Paused. Click to enter fullscreen and begin playing.", canvas.width / 2, canvas.height / 2);

window.addEventListener("resize", () => {
    if(document.fullscreenElement) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const randomIndex = Math.floor(Math.random() * games.length);
        const script = document.createElement("script");
        script.src = `games/${games[randomIndex]}.js`;
        script.onload = () => {
            eval(`${games[randomIndex]}Init()`);
        };
        document.body.appendChild(script);
    } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        graphics.textAlign = "center";
        graphics.textBaseline = "middle";
        graphics.font = "30px Arial";
        graphics.fillText("Game Paused. Click to enter fullscreen and begin playing.", canvas.width / 2, canvas.height / 2);
    }
});

canvas.addEventListener("mousemove", (e) => {
    cursorX = e.offsetX
    cursorY = e.offsetY
    customCursor.style.left = `${cursorX}px`;
    customCursor.style.top = `${cursorY}px`;
});

// Enter fullscreen on click
canvas.addEventListener("click", () => {
    canvas.requestPointerLock(); // Locks the pointer
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) { // Firefox Compatability
        canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullscreen) { // Chrome, Safari & Opera Compatability
        canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) { // IE/Edge Compatability
        canvas.msRequestFullscreen();
    }
});