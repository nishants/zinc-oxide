angular.module('zinc').controller('GamePlayController', ["$scope", "deckParticipation", "GamePlayService", function($scope, deckParticipation, GamePlayService){
			$scope.gamePlay = GamePlayService.create(deckParticipation);

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