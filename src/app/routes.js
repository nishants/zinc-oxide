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
          gamePlan: [function(){
            return {
              zincing: {
                visualize: [
                  {
                    phrase: {indices: [0, 1,2,3,4]},
                    transcript: 'What do you imagine when you read the text "Ships at a distance"  in first sentence ?'
                  },
                  {phrase: {indices: [34,35,36,37,38,39]} },
                ],
                imagine: [
                  {
                    phrase: {indices: [57,58,59,60,61,62,63,64,65]},
                    existsInPassage: false,
                    transcript: 'Which one of following is not a good example of "all those things they don\'t want to remember" ?',
                    usages: [
                      {
                        label: 'A cow eating grass.',
                        correct: false,
                      },
                      {
                        label: 'A baby being dropped.',
                        correct: true,
                      },
                      {
                        label: 'Getting fired from job.',
                        correct: true,
                      },
                      {
                        label: 'A scary nightmare.',
                        correct: true,
                      },
                    ]
                  }
                ]
              }
            };
          }]
        }
			})
      .state('crg.editor', {
        url: '/editor',
        templateUrl: 'assets/templates/crg-editor-template.html',
        controller: 'CRGEditorController'
      })
      .state('crg.editor.preview', {
        url: '/preview',
        templateUrl: 'assets/templates/crg-preview-template.html',
        controller: 'CRGameplayController',
        resolve : {
          gamePlan: ['CRGEditorService', function(CRGEditorService){
            return CRGEditorService.prepareGamePlan();
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
