angular.module("zinc").config(["$stateProvider", "$urlRouterProvider", "$locationProvider",function($stateProvider, $urlRouterProvider, $locationProvider){

	$urlRouterProvider.otherwise('/home');
	$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'assets/templates/home.html'
			});

	$locationProvider.html5Mode({
		//enabled: true,
		//requireBase: false
	});

}]);