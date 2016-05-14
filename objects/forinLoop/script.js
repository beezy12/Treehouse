var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};


// ***IMPORTANT: when using a for-in loop, you must use brackets to show the value....dot notation won't work and will
// give you undefined.
//  ex: console.log(person[name]);   

// prop is the keys you are iterating over.....person is the name of the object
for (prop in person) {
	console.log("prop:", prop);
	// console.log("person.prop:", person.prop);     this gives 'undefined'
	console.log("person[prop]:", person[prop]);
}