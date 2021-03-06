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
		},
		getById: function(id){
			return $http.get("assets/data/vocab-set-:id.json".replace(":id", id)).then(function(response){
				return response.data.vocabset;
			});
		},
		getGamePlanFor: function(vocabId, deckId){
			return $http.get("assets/data/vocab-set-:vocabId/deck-participation-:deckId.json".replace(":vocabId", vocabId).replace(":deckId", deckId)).then(function(response){
				return response.data.deck_participation;
			});
		}
	};
	return service;
}]);