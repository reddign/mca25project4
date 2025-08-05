// Initialize canvas
const canvas = document.getElementById("gameDisplay");
const display = canvas.getContext("2d");

// Initialize variables
const customCursor = document.getElementById("customCursor");
let cursorX = 0;
let cursorY = 0;

document.addEventListener("mousemove", (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
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
    canvas.requestPointerLock();
});

document.addEventListener("pointerlockchange", () => {
    if (document.pointerLockElement) {
        // Show the custom cursor when pointer locked
        customCursor.style.display = 'block';
    } else {
        // Hide the custom cursor when pointer unlocked
        customCursor.style.display = 'none';
    }
});