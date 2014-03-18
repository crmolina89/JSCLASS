/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// This function would set the variable objfade which is the div tag
// to opacity equal to count so it would make it appear after it counts to 10
function fade() {
    fadeObj.style.opacity = count;
}
// This function actually made the calculation of taking the var count and adding .10 until
// it reaches 1 which loops through 10 times
function Show() {
    count+=.10;
    // here I call the function I made above
    fade();
    if (count < 1){
        // Set the time to show after 100
        setTimeout(Show, 100);
    }
}    
// This function is to hide the div tag after 10 seconds
function Hide(){
    // This sets it so it will subtract .10 to count every time it loops
    count-=.10;
    // calls the fade function
    fade();
    // It will loop through once
    if (count > 0){
        setTimeout(Hide, 100); 
   }
}

// Got the id tag for the div tag and set it to a variable
var fadeObj = document.getElementById("fade");
// Made a count variable 
var count = 0.0;

fadeObj.style.opacity = 0;
// The event listener will show on load 
window.addEventListener('load', Show);
// Set time out to hide after 10 seconds
setTimeout(Hide, 10000);

// Made a variable to get the canvas
var can = document.getElementById('tutorial');
// Made this a 2d obj
var ctx = can.getContext('2d');

// Grabbed the new image to be ready to load
var img = new Image();

// Made my circle on the canvas
ctx.beginPath();
// Sets the position of where the circle will appear on my canvas
ctx.arc(100,150, 80,0, 2*Math.PI);
ctx.fillStyle="blue";
ctx.fill();

// This made my rectangle
// Set to color red
ctx.fillStyle="#FF0000";
ctx.fillRect(250,150,150,75);
 
 // This will happen on load it will call the image then draw it on the canvas to the place I specified
img.onload = function(){
            ctx.drawImage(img, 480, 140, 100, 100);           
               };     
// I set the img to the picture I used
img.src = "http://1.bp.blogspot.com/-11wj6H-_CfQ/T6DJpQzNuMI/AAAAAAAAC04/BtLUSoDB8MU/s400/manchester_united_logo_reasonably_small.jpg"; 