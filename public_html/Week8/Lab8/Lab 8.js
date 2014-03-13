/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function fadeIn() {
    fade.style.opacity = count;
}

function Anima() {
    count+=.10;
    if (count < 1){
        fadeIn();
        setTimeout(Anima, 100);
    }
}

function fadeOut() {
    fade.style.display = hide;
}
    
function Hide(){
    hide-=.10;
    if (hide > 0){
        fadeOut();
        setTimeout(Hide, 10000); 
   }
}

var fade = document.getElementById("fade");
var count = 0.0;
var hide = 1.0;

fade.style.opacity = 0;
fade.style.display = 0;
        
window.addEventListener('load', Anima);
window.addEventListener('load', Hide);