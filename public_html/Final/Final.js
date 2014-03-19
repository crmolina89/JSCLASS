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

function toggleDiv() {   
                 $("#section1,#section2,#mainform").toggle("show");
            };


function validation(){          //Function to remove everything from the page and run the function
                                //to create a new div based on which radio button is selected        
        
            if (disagreeCheck === false && agreeCheck === true){                
                                
                toggleDiv();
                
                $("#submitAgreement").toggle("slow");

                createNewDiv(
                        "blue",
                        "orange",
                        "400px",
                        "1px solid black",
                        "30px",
                        "100%",
                        "1em auto",            
                        "<h2>THANK YOU FOR AGREEING TO THE TERMS!</h2>");                    
            }                   
            else if (agreeCheck === false && disagreeCheck === true){                        
                              
                toggleDiv();
                $("#submitAgreement").toggle("slow");                          
                
                createNewDiv(
                        "white",
                        "red",
                        "400px",
                        "1px solid black",
                        "30px",
                        "100%",
                        "1em auto",            
                        "<h2>YOU DID NOT ACCEPT THE TERMS!</h2>");                                    
            }       
}
//Click event listener for the agree radio button
$('#agree').click(function(){
radioButton();
});

$('#notagree').click(function(){
radioButton();
});
//Click event listener for the continue button
$('#submitAgreement').click(function() {    
validation();
});

//Function that creates a new Div for the agree or not agree messages
function createNewDiv(color,bgcolor,width,border,borderradius,height,margin,html){          //Function to create the new div
var newDiv = document.createElement("div");
      newDiv.style.color = color;
      newDiv.style.backgroundColor = bgcolor;
      newDiv.style.width = width;
      newDiv.style.border = border;
      newDiv.style.borderRadius = borderradius;
      newDiv.style.minHeight = height;
      newDiv.style.margin= margin;
      var label = document.createElement('label');
      label.innerHTML = html;
      label.style.textAlign="center";
      newDiv.appendChild(label);
      myDiv = document.getElementById("changeDiv");
      document.body.insertBefore(newDiv, myDiv);
}

