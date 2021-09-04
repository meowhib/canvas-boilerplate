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
    // Keycodes
})

// Functions
function randBool(){
    return Math.random() < 0.5 ? true : false;
}

function randInt(){
    return Math.floor(Math.random() * (max - min) ) + min;
}