angular.module("zinc").service("GamePlayService", ["$http", function ($http) {
	return {
		create: function(data){
			return {
				title: data.title,
				image: data.image,
			};
		}
	}
}]);