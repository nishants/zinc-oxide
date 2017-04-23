angular.module('zinc').controller('DropSquaresController', function ($scope) {
	$scope.onDrop = function (option) {
		alert("You Choose : " + option.name);
	};
});