// this program creates a random number and has the computer try to guess it. It logs the attempts and 
// the random number chosen.


var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;


function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while (guess !== randomNumber) {
	// this is the computer's guess, which is a random number from 1 to 10000
	guess = getRandomNumber(upper);
	attempts += 1;
}

document.write("<p>The number was " + randomNumber + ". And it took the computer " + attempts + 
	" guesses to get the job done.</p>");