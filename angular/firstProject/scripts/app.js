// this is where the app is created. the [] tells the browser(?) that an app is being created here. 
// notice that it won't be on other pages
angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
	$scope.helloWorld = function() {
		console.log("This is coming from the mainCtrl, it's the helloWorld function")
	};
});