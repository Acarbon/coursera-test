(function () {
'use strict';

angular.module('MsgApp', [])

.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController ($scope){

	$scope.name = "Ainhoa";
	$scope.image1 = "mario";
	$scope.image2 = "yoshi";
	
	$scope.feedMario = function () {
		$scope.image1 = "seta";
	};

	$scope.feedYoshi = function () {
		$scope.image2 = "manzana"
	};
}
	
})();