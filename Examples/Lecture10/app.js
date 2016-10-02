(function () {
'use strict';

angular.module('DIApp', [])

.controller('DIController',['$scope', '$filter', DIController]);

	function DIController ($scope, $filter){

		$scope.name = "Ainhoa";

		$scope.upper = function () {
			var upCase = $filter('uppercase');
			$scope.name = upCase($scope.name);
		};
	}
	
})();