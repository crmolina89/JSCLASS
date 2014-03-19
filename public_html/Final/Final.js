/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Here I declared my variables
// These two are going to be used to verify if document 1 and 2 have been clicked
var doc1 = false;
var doc2 = false;
// These two will be used to determine whether the user agreed or declined terms
var agreeCheck = false;
var disagreeCheck = false;
// To check if the user has scolled or not
var scrolled = false;   
// To let user know to continue after the docs have been clicked
// and the scroll box scrolled
var radio = false;
// Here I get all my elements by ID to be used throught the program
// These two are for the document links
var click1 = document.getElementById('agreeLink1');
var click2 = document.getElementById('agreeLink2');
// These are for the agree or disagree radio buttons
var agree = document.getElementById('agree');
var notAgree = document.getElementById('notagree');

// Here we set the variable equal to the agreescroll to later check if it has or hasn't
var objDiv = document.getElementById("agreeScroll");
// This event listener is to check for valid scroll
objDiv.addEventListener('scroll', scrollValid);

// This function is to check if the first document was clicked
function doc1clicked(){   
    // If it was I change the value of doc1 from false to true
    (doc1 = true);       
    // Send it to console log along with whether the user has scolled the 
    // scroll box yet or not
    console.log("doc1 is " + doc1);
    scrollValid();
}
// Added an event listener on the actual click of the link which will then call the function
click1.addEventListener('click', doc1clicked);

// Works same as first document click
function doc2clicked() {
    (doc2 = true);
    console.log("doc2 is " + doc2);
    scrollValid();
}

click2.addEventListener('click', doc2clicked);

// This function is to test if scroll is valid or not
function scrollValid() {
    // Here I call back the variable created with the agreescroll 
    // to pass the checks once it does
    if (objDiv.scrollTop === (objDiv.scrollHeight-objDiv.offsetHeight)){
        // Changes the scroll to true
        scrolled = true;       
    }
    // If the first two documents have been clicked and scroll equals true
    if(doc1 === true && doc2 === true && scrolled === true){
            // It will disable the radio buttons for the user to click
            agree.disabled = false;
            notAgree.disabled = false;
        }
    // Sends to console to see when the user finally made a valid full scroll
    console.log("scroll is " + scrolled);
}

// Function check which radio buttton was clicked
function radioButton(){
    // If agree was check and the other docs were too
        if (agree.checked === true && doc1 === true && doc2 === true){
            // Will change the values of these two variables
            agreeCheck = true;
            disagreeCheck = false;
        }
        else if (notAgree.checked === true && doc1 === true && doc2 === true){             
            agreeCheck = false;
            disagreeCheck = true;
        }
        // Checks if something has been clicked then it will display the message to the user
        if (radio !== true && doc1 === true && doc2 === true){
            $("<b>You may now continue!</b>").appendTo('form');
            radio = true;
        }
}

// Function to toggle the sections
function toggle() {   
    $("#section1,#section2,#mainform, #submitAgreement").toggle("slow");
    
};

//Function that creates a new Div to display the message to the user 
function createNewDiv(color,bgcolor,width,border,borderradius,height,margin,html){          //Function to create the new div
var newDiv = document.createElement("div");
      newDiv.style.color = color;
      newDiv.style.backgroundColor = bgcolor;
      newDiv.style.width = width;
      newDiv.style.border = border;
      newDiv.style.borderradius = borderradius;
      newDiv.style.minHeight = height;
      newDiv.style.margin= margin;
      var label = document.createElement('label');
      label.innerHTML = html;
      label.style.textAlign="center";
      newDiv.appendChild(label);
      myDiv = document.getElementById("changeDiv");
      document.body.insertBefore(newDiv, myDiv);
}

// Function to remove everything from the page and run the function
// to create a new div based on which radio button is selected 
function validation(){         
        // If they don't agree then 
            if (disagreeCheck === false && agreeCheck === true){                
                 // The function is making a call to the toggle               
                toggle();
                // This div is used to display the message to the user
                // Makes a call to the function made above
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
                              
                toggle();                         
                
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
// Click event listener for the agree radio button
$('#agree').click(function(){
// Makes a call back to the radio button function 
radioButton();
});
// Click event listener for the agree radio button
$('#notagree').click(function(){
radioButton();
});
//Click event listener for the continue button
$('#submitAgreement').click(function() {    
// Makes a call back to the validation function
validation();
});



