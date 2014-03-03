/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Here made a variable to get the orginal color of the 'a' tag  
var orginalColor=$('a').css('color');

console.log(orginalColor);

// Made a function for when the user goes over the link
function mouseOverlink(){
    // Changed the color and background color in this function
    $(this).css('color', 'lime').css('background-color','blue');
}

// Made a function for when the user hovers away from the link
function mouseOutlink(){
    // Changed the bg color back to white
    // Used the variable I made above to set the text color back to its original
    $(this).css('background-color','white').css('color',orginalColor);
}

// This function is used to hide the different text boxes
function Hide(){
    // Call all the id names and class name
    $("#nav1,#nav2,#nav3,#nav4").addClass('contentBox').hide();
}

// This function is for the first link so when it is clicked all the other id text boxes
// remain hidden and the "nav1" id comes into the screen "slow"
function Link1(){
    $('#nav2,#nav3,#nav4').hide();
    $('#nav1').show('slow');
}

// This function works exactly the same but shows the second text boxes with 
// it's corresponding link
function Link2(){
    $('#nav1,#nav3,#nav4').hide();
    $('#nav2').show('slow');
}

function Link3(){
    $('#nav1,#nav2,#nav4').hide();
    $('#nav3').show('slow');
}

function Link4(){
    $('#nav1,#nav2,#nav3').hide();
    $('#nav4').show('slow');
}

// Here is where we call the function Hide to hide all the upon page load
$(window).load(Hide);

// Here I called the mouseOverlink and mouseOutlink 
$("a").mouseover(mouseOverlink).mouseout(mouseOutlink);

// Here I called the class thats equal to what the user would click as a link
// Set it so on "click" the "Link1" function would execute
$(".button-color-1 a").click(Link1);
$(".button-color-2 a").click(Link2);
$(".button-color-3 a").click(Link3);
$(".button-color-4 a").click(Link4);