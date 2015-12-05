// this is where the app is created. the [] tells the browser(?) that an app is being created here. 
// notice that it won't be on other pages
angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {

	$scope.learningNgChange = function() {
		console.log("An input changed")
	};

	$scope.todos = [
		{"name": "wash up"},
		{"name": "pay up"},
		{"name": "do the damn thing"},
		{"name": "sang a song"}
	]

}); // end of controller


