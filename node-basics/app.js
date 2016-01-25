// this program will look at a treehouse user's badge points and return it
// using node.js to connect to treehouse's api and get information


// THESE 3 THINGS BELOW ARE WHAT YOU WANT TO HAPPEN INSIDE THE CALLBACK OF THE HTTP.GET
// read the data from the response
// parse data  (parsing means reading data from a string into a program-friendly way of interacting with it)
// print data out

// note: HTTP WOULDN'T WORK IN TREEHOUSE......HAD TO SWITCH EVERYTHING OVER TO HTTPS
var https = require('https');
var http = require('http');
var username = 'brianstumbaugh222';

function printMessage(username, badgecount, points) {
	var message = username + " has " + badgecount + " total badges, and " + points + " points in Javascript.";
	console.log(message);
};


// connect to the API url (teamtreehouse.com/username.json)
// (look at node docs for http.get syntax)

// print out message
var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
	// console.dir inspects the response object (?)
	//console.dir(response);
	console.log("aaaand the status code: ", response.statusCode);

// print out error messages
function printError(error) {
	console.error('there was an error with yo request :' + error.message);
}


	// when data is sent across a network or the internet, it's not all sent in one go. It's sent in packets of
	// information. Node uses STREAMS to implement it's non-blocking features.
	// Node allows us to do other things while it is waiting for all the data to be transferred.
	// It also emits an 'end' event when all the data has come in. The callback fires when 'end' is true.
	// // we can build the body by concatenating the chunks to the body as they come in.    body += chunk;
	var body = '';
	// read the data from the response
	response.on('data', function(chunk) {
		body += chunk;
	});
	response.on('end', function() {
		if (response.statusCode === 200) {
			try {
				//console.log(body);
				// NOTE THAT THE BODY COMES BACK AS A STRING, NOT AN OBJECT
				// YOU CAN CHECK WITH typeof
				console.log(typeof body);
				// soooo.....parse. JSON.parse turns a string into an object
				var profile = JSON.parse(body);
				console.dir(profile);
				console.log("after JSON.parse, profile (formerly body) was a string, and is now a: ", typeof profile);

				printMessage(username, profile.badges.length, profile.points.JavaScript);
			} catch (error) {
				// parse error
				printError(error);
			}
		} else {
			// Status Code Error
			printError({message: "there was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
		}
	});





	// parse data  (parsing means reading data from a string into a program-friendly way of interacting with it)

	// print data out
});

// 'error' here is the error event. This code will get executed when the error event is EMITTED by the system.
// all error (e) objects have the message property.
// the code here was moved to the printError function above
// now it's just a CONNECTION ERROR HANDLER
request.on('error', function(printError) {
});

