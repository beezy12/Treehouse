function randomGenerator(lower, upper) {

	if (isNaN(lower) || isNaN(upper)) {
		throw new Error("Gimme a number");
	}
	return Math.floor(Math.random() * (upper - lower + 1) + lower);
	// return result;
}

document.write("<p>" + randomGenerator(20, 50) + " is a number between 20 and 50.</p>");
document.write("<p>" + randomGenerator("nine", 50) + " is a number between 20 and 50.</p>");
