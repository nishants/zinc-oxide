angular.module("zinc").config(["$stateProvider", "$urlRouterProvider", "$locationProvider",function($stateProvider, $urlRouterProvider, $locationProvider){

	$urlRouterProvider.otherwise('/vocab');
	$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'assets/templates/home-template.html'
			})
			.state('articles', {
				url: '/articles',
				templateUrl: 'assets/templates/articles-template.html'
			})
			.state('reports', {
				url: '/reports',
				templateUrl: 'assets/templates/reports-template.html'
			})
			.state('vocab', {
				url: '/vocab',
				templateUrl: 'assets/templates/vocab-list-template.html',
				resolve : {
					list: ["VocabService", function(VocabService){
						return VocabService.fetchMySets();
					}]
				},
				controller: ["$scope", "list", function($scope, list){
					$scope.games = list;
				}]
			})
			.state('vocab.view', {
				url: '/:id/view',
				templateUrl: 'assets/templates/vocab-view-template.html',
				resolve: {
					vocabset: [
						"$stateParams",
						"VocabService",
						function($stateParams, VocabService){
							return VocabService.getById($stateParams.id);
						}
					]
				},
				controller: ["$scope", "vocabset", function($scope, vocabset){
					$scope.vocabset = vocabset;
				}]
			})
			.state('vocab.play', {
				url: '/:vocabId/deck/:deckId/play',
				templateUrl: 'assets/templates/game-play-template.html',
				resolve: {
					deckParticipation: [
						"$stateParams",
						"VocabService",
						function($stateParams, VocabService){
							return  VocabService.getGamePlanFor($stateParams.vocabId, $stateParams.deckId );
						}
					]
				},
				controller: ["$scope", "deckParticipation", function($scope, deckParticipation){
					$scope.gameplan = deckParticipation.gameplan;
					$scope.deck     = deckParticipation.deck;
					$scope.vocabset    = {id: 1};
					$scope.timer    = {timeLimit: '15s'};
					$scope.user     = {
						points: 100,
						timer : "00:19",
					}
				}]
			});

	$locationProvider.html5Mode({
		//enabled: true,
		//requireBase: false
	});
}]);
