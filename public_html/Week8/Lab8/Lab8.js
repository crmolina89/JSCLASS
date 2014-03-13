/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function fade() {
    fadeObj.style.opacity = count;
}
function Show() {
    count+=.10;
    fade();
    if (count < 1){
        setTimeout(Show, 100);
    }
}    
function Hide(){
    count-=.10;
    fade();
    if (count > 0){
        setTimeout(Hide, 100); 
   }
}

var fadeObj = document.getElementById("fade");
var count = 0.0;

fadeObj.style.opacity = 0;
    
window.addEventListener('load', Show);
setTimeout(Hide, 10000);

var can = document.getElementById('tutorial');
var ctx = can.getContext('2d');

function Image1(){
            ctx.clearRect(0,0,can.width,can.height);
            ctx.fillRect(25,25,50,50);
               }
              
var img = new Image();
img.src = 'soccerball.jpg'; 
img.addEventListener("load", function Image1(){
console.log('image loaded');
} ,false);