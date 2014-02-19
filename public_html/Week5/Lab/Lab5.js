/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



// This function is used to validate the first name field
function noSpaceAlphaValidate( str ) {
        // Uses a regex testing user entered any letter upper/lower
        // At least one with no space
        var alphaRegex = /^[a-zA-Z]{1,}$/;
        return alphaRegex.test(str);			
}

// This function is used to validate the last name field
function spaceAlphaValidate( str ) {
        // Uses a regex testing user entered any letter upper/lower
        // At least one with a space made by adding space after cap Z
        var alphaRegex = /^[a-zA-Z ]{1,}$/;
        return alphaRegex.test(str);			
}

// This function is used to test the email field
function emailValidate ( str ) {
        // The regex tests for the series of conditons 
        var alphaRegex = /(^[a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{3}$)/;
        return alphaRegex.test(str);
}

// This function is used for the comments box
function strip_HTML(str) {
        // It searches the comments for any html to remove it
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}


function submitform() {

        
         var fname = document.getElementById('fname');
         var fnameErr = document.getElementById("err_fname"); // The span or border of the field
 
 
        if ( !fname.value.length ) {
                console.log("First name needs a length");
        } else if ( noSpaceAlphaValidate( fname.value ) == false ) {
                console.log("First name needs Alpha chars");
                 fname.className = "bad";
                 fnameErr.innerHTML = "<strong>First Name is <em>NOT</em> valid</strong>";
                 fnameErr.className = "error";
        } else {
                fname.className = "good"; // Name of css style will be applied to border
                fnameErr.innerHTML = "<strong>First Name is valid</strong>"; // Message displayed to user next to field
                fnameErr.className = "valid"; // Name of css style applied to text message
                console.log("First name is good");
        }

         var lname = document.getElementById('lname');
         var lnameErr = document.getElementById("err_lname"); // The span or border of the field
 
 
        if ( !lname.value.length ) {
                console.log("Last name needs a length");
        } else if ( spaceAlphaValidate( lname.value ) == false ) {
                console.log("Last name needs Alpha chars");
                 lname.className = "bad";
                 lnameErr.innerHTML = "<strong>Last Name is <em>NOT</em> valid</strong>";
                 lnameErr.className = "error";
        } else {
                lname.className = "good"; // Name of css style will be applied to border
                lnameErr.innerHTML = "<strong>Last Name is valid</strong>"; // Message displayed to user next to field
                lnameErr.className = "valid"; // Name of css style applied to text message
                console.log("Last name is good");
        }

         var email = document.getElementById('email');
         var emailErr = document.getElementById("err_email"); // The span or border of the field
 
 
        if ( !email.value.length ) {
                console.log("email needs a length");
        } else if ( emailValidate( email.value ) == false ) {
                console.log("email needs Alpha chars");
                 email.className = "bad";
                 emailErr.innerHTML = "<strong>Email is <em>NOT</em> valid</strong>";
                 emailErr.className = "error";
        } else {
                email.className = "good"; // Name of css style will be applied to border
                emailErr.innerHTML = "<strong>Email is valid</strong>"; // Message displayed to user next to field
                emailErr.className = "valid"; // Name of css style applied to text message
                console.log("Email is good");
        }
        
        var comment = document.getElementById('comments');
        var commentErr = document.getElementById("err_comments");
        comment.value = strip_HTML(comment.value);
        
        if (!comment.value.length || !comment.value.length > 150){
            
                 comment.className = "bad";
                 commentErr.innerHTML = "<strong>Comment is <em>NOT</em> valid</strong>";
                 commentErr.className = "error";
        } else {
                comment.className = "good"; // Name of css style will be applied to border
                commentErr.innerHTML = "<strong>Comment is valid</strong>"; // Message displayed to user next to field
                commentErr.className = "valid"; // Name of css style applied to text message
                console.log("Comment is good");
           }
}

document.getElementById("submit").addEventListener('click',submitform);