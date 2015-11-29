
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

var right = [];
var wrong = [];

var questions = [
	["Capital of Tennessee?", "Nashville"],
	["Capital of Texas?", "Austin"],
	["Capital of Illinois?", "Springfield"],
	["Capital of Hawaii?", "Honolulu"]
];

// loop through questions, ask it, and compare users answer
for (var i = 0; i < questions.length; i++) {
	var answer = prompt(questions[i][0]);
	if(answer === questions[i][1]) {
		right.push(answer);
	} else {
		wrong.push(answer);
	}
}

print("You got " + right.length + " answers right, and " + wrong.length + " answers wrong.");
print("Correct Answers: " + right.join(', '));
print("Incorrect Answers: " + wrong.join(', '));