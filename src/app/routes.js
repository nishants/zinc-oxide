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
				url: '/view',
				templateUrl: 'assets/templates/vocab-view.html'
			});

	$locationProvider.html5Mode({
		//enabled: true,
		//requireBase: false
	});

}]);