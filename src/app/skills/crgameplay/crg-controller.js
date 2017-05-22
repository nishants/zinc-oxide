app.controller('CRGameplayController', ['$scope', '$timeout', 'CRGPlayer', 'CRGService', function ($scope, $timeout, CRGPlayer, CRGService) {

  var game    = CRGService.create();
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