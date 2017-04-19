angular.module('zinc').controller('GamePlayController', ["$scope", "deckParticipation", function($scope, deckParticipation){
			$scope.gameplan = deckParticipation.gameplan;
			$scope.deck     = deckParticipation.deck;
			$scope.vocabset    = {id: 1};
			$scope.timer    = {timeLimit: '15s'};
			$scope.user     = {
				points: 100,
				timer : "00:19",
			}
		}]
);