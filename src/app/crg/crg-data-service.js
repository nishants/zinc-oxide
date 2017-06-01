app.factory("CRGDataService", ["$http",function ($http) {
  return {
    getGame: function(id){
      var url = "assets/data/crg-sample-game-data-<id>.json".replace("<id>", id);
      return $http.get(url).then(function(response){
        return response.data;
      })
    }
  };
}]);