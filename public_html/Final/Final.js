/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var doc1 = false;
var doc2 = false;
var agreeCheck = false;
var disagreeCheck = false;
var scrolled = false;     
var radio = false;
var click1 = document.getElementById('agreeLink1');
var click2 = document.getElementById('agreeLink2');
var agree = document.getElementById('agree');
var notAgree = document.getElementById('notagree');

var objDiv = document.getElementById("agreeScroll");
objDiv.addEventListener('scroll', scrollValid);

function doc1clicked(){              
    (doc1 = true);               
    console.log("doc1 is " + doc1);
    scrollValid();
}

click1.addEventListener('click', doc1clicked);

function doc2clicked() {
    (doc2 = true);
    console.log("doc2 is " + doc2);
    scrollValid();
}

click2.addEventListener('click', doc2clicked);

function scrollValid() {
    if (objDiv.scrollTop === (objDiv.scrollHeight-objDiv.offsetHeight)){
        scrolled = true;
        if(doc1 === true && doc2 === true){
            agree.disabled = false;
            notAgree.disabled = false;
        }
    }
    console.log("scroll is " + scrolled);
}

function radioButton(){
        if (agree.checked === true && doc1 === true && doc2 === true){
            agreeCheck = true;
            disagreeCheck = false;
        }
        else if (notAgree.checked === true && doc1 === true && doc2 === true){             
            agreeCheck = false;
            disagreeCheck = true;
        }
        if (radio !== true && doc1 === true && doc2 === true){
            $("<b>You may now continue!</b>").appendTo('form');
            radio = true;
        }
}



