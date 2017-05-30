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
			.state('crg', {
				url: '/crg',
				templateUrl: 'assets/templates/crg-template.html'
			})
			.state('crg.gameplay', {
				url: '/gameplay',
				templateUrl: 'assets/templates/crg-gameplay-template.html',
        controller: 'CRGameplayController',
        resolve : {
          gamePlan: ['CRGDataService', 'CRGGameService', function(CRGDataService, CRGGameService){
            return CRGDataService.getGame(1).then(function(gameData){
              CRGGameService.setPassage(gameData);
              return gameData;
            });
          }]
        }
			})
      .state('crg.editor', {
        url: '/editor/:id',
        templateUrl: 'assets/templates/crg-editor-template.html',
        controller: 'CRGEditorController',
        resolve : {
          gamePlan: ['CRGDataService', 'CRGEditorService', function(CRGDataService, CRGEditorService){
            return CRGDataService.getGame(1).then(function(gameData){
              CRGEditorService.setGameToEdit(gameData);
            });
          }]
        }
      })
      .state('crg.editor.preview', {
        url: '/preview',
        templateUrl: 'assets/templates/crg-preview-template.html',
        controller: 'CRGameplayController',
        resolve : {
          gamePlan: ['CRGEditorService', 'CRGGameService', function(CRGEditorService, CRGGameService){
            var gameData = CRGEditorService.prepareGamePlan();
            CRGGameService.setPassage(gameData);
            return gameData;
          }]
        }

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
				controller: "GamePlayController"
			});

	$locationProvider.html5Mode({
		//enabled: true,
		//requireBase: false
	});
}]);
