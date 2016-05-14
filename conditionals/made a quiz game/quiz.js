var correct = 0;

var answer1 = prompt("what is your name?");
if (answer1.toUpperCase() === 'BRIAN') {
  correct += 1;
}

var answer2 = prompt("what is your age?");
if (parseInt(answer2) === 36) {
  correct += 1;
}

var answer3 = prompt("what is your species?");
if (answer3.toUpperCase() === "HUMAN") {
  correct += 1;
}

var answer4 = prompt("what sex are you?");
if (answer4.toUpperCase() === 'MALE') {
  correct += 1;
}

var answer5 = prompt("are you older than 35?");
if (answer5.toUpperCase() === 'YES') {
  correct += 1;
}


if (correct === 5) {
  alert('you win the gold crown!');
} else if (correct >= 3) {
    alert('you win the silver crown');
} else if (correct === 2) {
    alert('you win the bronze');
} else {
    alert("you are a dummy.");
}
  