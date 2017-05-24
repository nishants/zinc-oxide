app.controller('CRGameplayController', ['$scope', '$timeout', 'CRGPlayer', 'CRGService', 'gamePlan', function ($scope, $timeout, CRGPlayer, CRGService, gamePlan) {

  var game    = CRGService.create(gamePlan);
  game.player = CRGPlayer.create(game);

  $scope.onTextSelect = function(indexes){
    $timeout(function(){
      game.selectedText = indexes.map(function (index) {
        return game.passage[index].text;
      }).join(" ");
    });
  };

  $scope.game = game;
}]);