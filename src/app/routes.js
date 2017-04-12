angular.module("zinc").config(["$stateProvider", "$urlRouterProvider", "$locationProvider",function($stateProvider, $urlRouterProvider, $locationProvider){

	$urlRouterProvider.otherwise('/vocab');
	$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'assets/templates/home.html'
			})
			.state('vocab', {
				url: '/vocab',
				templateUrl: 'assets/templates/vocab.html',
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
				templateUrl: 'assets/templates/vocab-view.html',
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
			});

	$locationProvider.html5Mode({
		//enabled: true,
		//requireBase: false
	});

}]);