/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function submitForm() {
       var name = document.getElementById("name"); // Input what the user puts in the actual field (text)
       var nameErr = document.getElementById("err_name"); // The span or border of the field
 
               
               if ( name.value.length > 0 ) { // Testing if what the user entered is nothing if so continues following line
                   name.className = "good"; // Name of css style will be applied to border
                   nameErr.innerHTML = "<strong>Name is valid</strong>"; // Message displayed to user next to field
                   nameErr.className = "valid"; // Name of css style applied to text message
               } else {
                   name.className = "bad";
                   nameErr.innerHTML = "<strong>Name is <em>NOT</em> valid</strong>";
                   nameErr.className = "error";
               }


       var email = document.getElementById("email");
       var emailErr = document.getElementById("err_email");
 
               
               if ( email.value.length > 0 &&  email.value.indexOf("@") > 0 && email.value.indexOf(".") > 0 ) { // Tests for input value to be greater than 0, needs to include an @ symbol and a "."
                   email.className = "good";
                   emailErr.innerHTML = "<strong>Email is valid</strong>";
                   emailErr.className = "valid";
               } else {
                   email.className = "bad";
                   emailErr.innerHTML = "<strong>Email is <em>NOT</em> valid</strong>";
                   emailErr.className = "error";
               }
               
               
       var comments = document.getElementById("comments");
       var commentsErr = document.getElementById("err_comments");
 
               
               if ( comments.value.length > 0 &&  comments.value.length < 150 ) { // Tests for input value to be greater than 0 and less than 150
                   comments.className = "good";
                   commentsErr.innerHTML = "<strong>Comment is valid</strong>";
                   commentsErr.className = "valid";
               } else {
                   comments.className = "bad";
                   commentsErr.innerHTML = "<strong>Comment is <em>NOT</em> valid</strong>";
                   commentsErr.className = "error";
               }
}  