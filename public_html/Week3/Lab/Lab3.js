/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function randomNum( max ){
                return (Math.floor( Math.random()*max));
            }
            
function randomAd (){
                    
           
var ads = [];
            
            ads.push({ "title" : 'bk', "description" : 'Have it you way'});
            ads.push({ "title" : 'nike', "description" : 'Just do it'});
            ads.push({ "title" : 'gatorade', "description" : 'Is it in you'});
            ads.push({ "title" : 'koolaid', "description" : 'Oh yea'});
            ads.push({ "title" : 'familyguy', "description" : 'Alright, Giggity'});
            
            
            var randomIndex = randomNum(ads.length);
            console.log(randomIndex);
            
            
            var div = document.getElementById("ad");
            
            div.innerHTML = ads[randomIndex]["title"] + " " + ads[randomIndex]["description"];
            
            document.title = ads[randomIndex]["description"].substr(0,10) + "...";
            }
            
            randomAd();