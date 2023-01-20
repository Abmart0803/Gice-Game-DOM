//We get random number between 1 to 5 and add 1 to it to make the random between 1 and 6.
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
//we use the below code to select dice from dice 1 to dice 6.
var randomDiceImage = "dice" + randomNumber1 + ".png";
//we set the source of random dice image here to be between images/dice1 - images/dice6.
var randomImageSource = "images/" + randomDiceImage;
//we assign variable image1 to the first image.
var image1 = document.querySelectorAll("img")[0];
//we set the image1 attribute to randomImageSource so that it can be picking one dice 
// imgae at a time between one to 6
image1.setAttribute("src", randomImageSource);

//do the second dice as you do dice 1.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//in case player 1 win.
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!!!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!!! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!!!";
}