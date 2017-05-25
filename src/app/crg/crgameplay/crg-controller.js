app.controller('CRGameplayController', ['$scope', '$timeout', 'CRGPlayer', 'CRGGameService', 'gamePlan', 'CRGGameScript', function ($scope, $timeout, CRGPlayer, CRGGameService, gamePlan, CRGGameScript) {

  var script  = CRGGameScript,
      game    = CRGGameService;

  script.load(gamePlan);
  game.plan = gamePlan;
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