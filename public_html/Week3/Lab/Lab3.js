/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// function takes the maximum number from the index
function randomNum( max ){
                return (Math.floor( Math.random()*max)); // math floor rounds down so never be over the index size
            }                   // makes it a random value
            
function randomAd (){
                    
           //This is the arrays index
var ads = [];
            
            ads.push({ "title" : 'bk', "description" : 'Have it you way'});
            ads.push({ "title" : 'nike', "description" : 'Just do it'});
            ads.push({ "title" : 'gatorade', "description" : 'Is it in you'});
            ads.push({ "title" : 'koolaid', "description" : 'Oh yea'});
            ads.push({ "title" : 'familyguy', "description" : 'Alright, Giggity'});
            
            // Made new var and set equal to a random ad from first funtion
            var randomIndex = randomNum(ads.length);
            console.log(randomIndex); // Sends to console display the number
            
            
            var div = document.getElementById("ad"); //This takes the div tag and changes it to display the random ad
            
            div.innerHTML = ads[randomIndex]["title"] + " " + ads[randomIndex]["description"]; // makes the display
            
            document.title = ads[randomIndex]["description"].substr(0,10) + "..."; 
            //That was to display the title as the description of the ad using the first 10 letters 
            }
            
            randomAd();