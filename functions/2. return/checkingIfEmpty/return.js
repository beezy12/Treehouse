function isEmailEmpty() {
	var field = getElementById('email');
	if (field.value === '') {
		return true;         // if field is empty, it tells whatever called this function that yeah there's nothing in this form.
	} else {
		return false;        // if there is actually an email in the form, then it tells it "we're good"
	}
}

var fieldTest = isEmailEmpty();    // fieldTest variable holds the answer from the function

if (fieldTest === true) {
	alert("Please provide your email address");
}