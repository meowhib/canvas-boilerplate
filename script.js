var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// Variables
var width = window.innerWidth;
var height = window.innerHeight;
var mousex = 0;
var mousey = 0;
var PI = Math.PI;

// Canvas edits
canvas.height = height;
canvas.width = width;

// Listeners
window.addEventListener("resize", function(){
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.height = height;
    canvas.width = width;
})

window.addEventListener("mousemove", function(e){
    mousex = e.clientX;
    mousey = e.clientY;
})

window.addEventListener("keydown", function(e){
    // Keycodes (32 space) (13 enter) (38 UP) (37 LEFT) (39 RIGHT) (40 DOWN)
})

// Functions
function randBool(){
    return Math.random() < 0.5 ? true : false;
}

function randInt(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

function clearScr(){
    ctx.clearRect(0, 0, width, height);
}

function drawDisc(x, y, r){
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(x, y, r, 0, PI * 2, true);
    ctx.fill();
}

function drawLine(pt0, pt1){
    ctx.beginPath();
    ctx.strokeStyle = "#FFFFFF";
    ctx.moveTo(pt0.x, pt0.y);
    ctx.lineTo(pt1.x, pt1.y);
    ctx.stroke();
}