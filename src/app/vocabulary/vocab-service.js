angular.module("zinc").service("VocabService", ["$http", function ($http) {
	var service = {
		list : [],
		page : {
			index: -1,
			size : 10
		},
		fetchMySets: function(){
			return $http.get("assets/data/vocab-sets.json").then(function(response){
				return response.data.list;
			})
		}
	};
	return service;
}]);