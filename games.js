// Initialize canvas
const canvas = document.getElementById("gameDisplay");
const graphics = canvas.getContext("2d");

// Initialize custom cursor
const customCursor = document.getElementById("customCursor");

// Initialize variables
let cursorX;
let cursorY;

// Import games
import {animateblind} from "games/blind.js";
import {animatepong} from "games/pong.js";
import {animatezig} from "games/zig.js";

const games = [
    "animateblind",
    "animatepong",
    "animatezig"
];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
graphics.textAlign = "center";
graphics.textBaseline = "middle";
graphics.font = "30px Arial";
graphics.fillText("Game Paused. Click to enter fullscreen and begin playing.", window.innerWidth / 2, window.innerHeight / 2);

window.addEventListener("resize", () => {
    if (document.fullscreenElement) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const randomIndex = Math.floor(Math.random() * jsFiles.length);
        games[randomIndex]();

    } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        graphics.textAlign = "center";
        graphics.textBaseline = "middle";
        graphics.font = "30px Arial";
        graphics.fillText("Game Paused. Click to enter fullscreen and begin playing.", window.innerWidth / 2, window.innerHeight / 2);
    }
});

canvas.addEventListener("mousemove", (e) => {
    if (document.pointerLockElement) {
        // Custom cursor moves independently while pointer locked
        cursorX += e.movementX;
        cursorY += e.movementY;
        customCursor.style.left = `${cursorX}px`;
        customCursor.style.top = `${cursorY}px`;

        // Keeps custom cursor inside viewport
        if(cursorX < 0) {
            cursorX = 0;
            customCursor.style.left = "0px";
        } else if(cursorX > window.innerWidth) {
            cursorX = window.innerWidth;
            customCursor.style.left = `${window.innerWidth}px`;
        }

        if(cursorY < 0) {
            cursorY = 0;
            customCursor.style.top = "0px";
        } else if(cursorY > window.innerHeight) {
            cursorY = window.innerHeight;
            customCursor.style.top = `${window.innerHeight}px`;
        }
    } else {
        // Custom cursor snaps to pointer while pointer unlocked
        cursorX = e.clientX
        cursorY = e.clientY
        customCursor.style.left = `${cursorX}px`;
        customCursor.style.top = `${cursorY}px`;
    }
});

// Enter fullscreen on click
canvas.addEventListener("click", () => {
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) { // Firefox Compatability
        canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullscreen) { // Chrome, Safari & Opera Compatability
        canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) { // IE/Edge Compatability
        canvas.msRequestFullscreen();
    }
    canvas.requestPointerLock(); // Locks the pointer
});

startTick();

function startTick() {
    let tick = 0;
    const intervalId = setInterval(() => {
        tick++;
        console.log(`Timer count: ${count}`);
        if (count >= 1000) {
            clearInterval(intervalId); // Stop the interval after 5 counts
            console.log("Timer stopped.");
        }
    }, 50); // Execute every 1000 milliseconds (1 second)
}