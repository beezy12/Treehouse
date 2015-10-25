// Math.random will generate a random number from 0 up to but not including 1

// simulates the roll of a six sided die
// var dieRoll = Math.floor( Math.random() * 6 ) + 1;
// alert('You rolled a ' + dieRoll);




//generate a random number between 1 and whatever number the user enters
// var input = prompt("Please type a number");
// var topNumber = parseInt(input);
// var randomNumber = Math.floor(Math.random() * topNumber) + 1;
// var message = "<p>" + randomNumber + " is a number between 1 and " + topNumber + ".</p>";
// document.write(message);



//generate a random number between two inputs from a user
var input1 = prompt("Enter a starting number");
var bottomNumber = parseInt(input1);
var input = prompt("Please type a number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;    //don't really get this part
// but he says if we wanted a number between 10 and 25, we subtract those 2...which leaves the random number between 0 and up to 16, 
// but with the floor it makes it 0 to 15....so you add he bottomNumber back on there (10) ....so it makes it 
// a random number between 10 and 25
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";
document.write(message);

