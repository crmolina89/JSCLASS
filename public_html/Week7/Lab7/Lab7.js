/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var orginalColor=$('a').css('color');

console.log(orginalColor);

function mouseOverlink(){
    $(this).css('color', 'lime').css('background-color','blue');
}

function mouseOutlink(){
    $(this).css('background-color','white').css('color',orginalColor);
}

function Hide(){
    $("#nav1,#nav2,#nav3,#nav4").addClass('contentBox').hide();
}

function Link1(){
    $('#nav2,#nav3,#nav4').hide();
    $('#nav1').show('slow');
}

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
    
$(window).load(Hide);

$("a").mouseover(mouseOverlink).mouseout(mouseOutlink);

$(".button-color-1 a").click(Link1);
$(".button-color-2 a").click(Link2);
$(".button-color-3 a").click(Link3);
$(".button-color-4 a").click(Link4);