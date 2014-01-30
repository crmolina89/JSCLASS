/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Makes the JSON object with variable inside
var userdata = {
    "email": "",
    "name": "",
    "height": "",
    "width": "",
    "navigator": "",
    "title": "",
    "mouseX": [],
    "mouseY": []
};
// Make a var set equal to what value is in email
var Uemail = document.getElementById('email');
// This prints out the value
Uemail.addEventListener('blur', Getemail);
// Function puts whats in username/email equal to value in email 
function Getemail() {
    userdata.email = document.getElementById('email').value;  
}

// Same as above function
var Uname = document.getElementById('fullname');
Uname.addEventListener('blur', Getname);
function Getname() {
    userdata.name = document.getElementById('fullname').value;  
}


function getHeight () {
    userdata.height = (innerHeight);
    // Always makes the var height equal to something this case innerHeight
}
window.addEventListener('load', getHeight);
// This loads value into console


//This function gets the width size of the page
function getWidth () {
    userdata.width = (innerWidth);
}
window.addEventListener('load', getWidth);


//This function gets Nav used by user through userAgent 
function getNav () {
    userdata.navigator = (navigator.userAgent);
}
window.addEventListener('load', getNav);


//Function gets title from the document directly
function getTitle () {
    userdata.title = (document.title);
}
window.addEventListener('load', getTitle);


//This function gets where the mouse is moving on X axis through the client 
function mouseMoveX(e){
                userdata.mouseX.push(e.clientX);
                // This makes it based on last 100 moves or more
                if ( userdata.mouseX.length > 100 ) {
                document.removeEventListener('mousemove', mouseMoveX);
                }
        } 
        document.addEventListener('mousemove', mouseMoveX);


//This function gets where the mouse is moving on Y axis through the client 
function mouseMoveY(e){
                userdata.mouseY.push(e.clientY);
                
                if ( userdata.mouseY.length > 100 ) {
                document.removeEventListener('mousemove', mouseMoveY);
                }
        } 
        document.addEventListener('mousemove', mouseMoveY);
  

//This allows the results to be displayed
//Then clears log of userdata JSON object
function showResults() {
    console.clear();
    console.log(userdata);
}
var results = document.getElementById('showResults');
results.addEventListener("click", showResults);