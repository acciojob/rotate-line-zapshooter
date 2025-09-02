//your JS code here. If required.
const line = document.getElementById('line');
let angle = 0;

// Rotate the line by increasing the angle by 2deg every 20ms
setInterval(() => {
    angle += 2;
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);
