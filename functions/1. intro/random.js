
// FUNCTION DECLARATION
function alertRandom() {
    var randomNumber = Math.floor( Math.random() * 6 ) + 1;
    alert(randomNumber);
}

alertRandom();
alertRandom();
alertRandom();
alertRandom();


// OR 


// FUNCTION EXPRESSION
var alertRandom = function() {
    var randomNumber = Math.floor( Math.random() * 6 ) + 1;
    alert(randomNumber);
}



 