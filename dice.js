var randomNumber1 = Math.floor(Math.random()*6)+1; 
// as we want number to be in between so used * 6 and as we want whole number so Math.floor().
var randomImage = "dice"+randomNumber1+".png";

var randomDiceImage ="images/"+randomImage; 

var image1 = document.querySelectorAll("img")[0];
// selecting 1st dice by using img tags 1st img
image1.setAttribute("src", randomDiceImage);

// similarly for the secont dice to generate random numnber 
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage);

// NOW AS PER WINNER BETWEEN PLAYER 1 AND 2 WE HAVE TO CHANGE THE DIPLAY NAME 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 is Winner!";
    document.querySelector("h1").classList.add("fontStyle");
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw! <br> Roll the dice again";
    document.querySelector("h1").classList.add("fontStyle");
}
else {
    document.querySelector("h1").innerHTML="Player 2 is Winner!";
    document.querySelector("h1").classList.add("fontStyle");
}
