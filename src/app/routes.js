angular.module("zinc").config(["$stateProvider", "$urlRouterProvider", "$locationProvider",function($stateProvider, $urlRouterProvider, $locationProvider){

	$urlRouterProvider.otherwise('/vocab');
	$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'assets/templates/home.html'
			})
			.state('vocab', {
				url: '/vocab',
				templateUrl: 'assets/templates/vocab.html'
			})
			.state('vocab.view', {
				url: '/:id/view',
				templateUrl: 'assets/templates/vocab-view.html',
				resolve: {
					vocabset: [
						"$stateParams",
						function($stateParams){
							return {id: $stateParams.id,title: "Fun Words", by: "Zinc", description: "Fun Words to learn this summer.", words: "one, two, three, four", status: "bonus", time: 1212, assigned: {by : {name: 'Tamara Oslon', image: 'assets/images/teacher.jpg'} , on:'Dec 12 2016'}};
						}
					]				},
				controller: ["$scope", "vocabset", function($scope, vocabset){
					$scope.vocabset = vocabset;
				}]
			});

	$locationProvider.html5Mode({
		//enabled: true,
		//requireBase: false
	});

}]);