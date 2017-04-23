angular.module('zinc').controller('ImageGameController', function ($scope) {
	$scope.current = {
		word: {name: "accept"},
		options: [{name: "dearth"}, {name: "receive"}, {name: "aegis"}, {name: "banal"}]
	};
	$scope.onDrop = function (option) {
		alert("You Choose : " + option.name);
	};
});