// guess a number between 1 and 6
// var correctGuess = false;
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
// if (parseInt(guess) === randomNumber) {
// 	correctGuess = true;
// }
// if (correctGuess) {
// 	document.write("<p>You got it!</p>");
// } else {
// 	document.write("<p>errrrrtttt. wrong. The number was " + randomNumber + ".</p>");
// }



//same game but tells user if they were too high or too low
var correctGuess = false;  // set this to false to start, and change it as you go whenever they get it right.
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
if (parseInt(guess) === randomNumber) {
	correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
	var guessMore = prompt("Try again. The number is more than " + guess);
	if (guessMore === randomNumber) {
		correctGuess = true;
	}
} else if (parseInt(guess) > randomNumber) {
	var guessLess = prompt("do again. The number is less than " + guess);
	if (guessLess === randomNumber) {
		correctGuess = true;
	}
}
if (correctGuess) {
	document.write("<p>You got it!</p>");
} else {
	document.write("<p>errrrrtttt. wrong. The number was " + randomNumber + ".</p>");
}
