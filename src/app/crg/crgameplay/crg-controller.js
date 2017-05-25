app.controller('CRGameplayController', ['$scope', '$timeout', 'CRGPlayer', 'CRGService', 'gamePlan', 'CRGGameScript', function ($scope, $timeout, CRGPlayer, CRGService, gamePlan, CRGGameScript) {

  var script  = CRGGameScript(gamePlan),
      game    = CRGService.create(gamePlan);

  game.player = CRGPlayer.create(game, script);

  $scope.onTextSelect = function(indexes){
    $timeout(function(){
      game.selectedText = indexes.map(function (index) {
        return game.passage[index].text;
      }).join(" ");
    });
  };

  $scope.game = game;
}]);