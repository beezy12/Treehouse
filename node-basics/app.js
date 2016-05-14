var profile = require('./profile');

// PROCESS   - is a global object, much like window object in the browser. With it
// we can access things like the current version of node and arguments passed in as a command line.


//console.dir(process);
//console.dir(process.argv);

//var users = ['brianstumbaugh2', 'brianstumbaugh3', mikeulvila];
var users = process.argv.slice(2);

users.forEach(profile.get);




// HAD THIS FIRST BUT SHORTENED IT UP BY PUTTING PROFILE.GET INTO THE CALLBACK DIRECTLY
// users.forEach(function(username) {
// 	profile.get(username);
// })

//profile.get("brianstumbaugh2");


