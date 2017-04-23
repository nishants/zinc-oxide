angular.module('zinc').controller('DropSquaresController', function ($scope) {
	$scope.onDrop = function (option) {
		!option.correct ? alert("Wrong answer"): "";
		$scope.gamePlay.next();
	};
});