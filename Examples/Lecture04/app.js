(function(){
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope){

	$scope.name = "Ainhoa";
	$scope.sayHello = function(){
		return "Hello Coursera!"
	};

});

})();