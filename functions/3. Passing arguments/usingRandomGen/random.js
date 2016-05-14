function getRandomNumber(upper) {
  	var randomNumber = Math.floor(Math.random() * upper) + 1;      // replaced the number 6 with upper
  	return randomNumber;
}
 
 // now, I can make the upper number to randomize whatever I want by calling the function and passing a number as its argument
/* console.log(getRandomNumber(10000));

console.log(getRandomNumber(10));
*/

/****************************************************************************************/

// now here's a function that calculates the area of a rectangle

function getArea(width, length, unit) {
	var area = width * length;
	return area + " " + unit;
}

var answer1 = getArea(5, 10, "square feet.");
console.log(answer1);