app.controller('CRGameplayController', ['$scope', function ($scope) {
  var paragraphs = [
        "Ships at distance have every man's wish on board. For some they come in with the tide. For others they sail forever onthe horizon, never out of sight, never landing until the watcher turn his eyes away in resignation, his dreams mocked to death by time. That is the life of men.",
        "Now, women forget all those things they don't  want to remember, and remember everything they don't want to forget. The dream is the truth. Then they act and do things accordingly.",
        "Ships at distance have every man's wish on board. For some they come in with the tide. For others they sail forever onthe horizon, never out of sight, never landing until the watcher turn his eyes away in resignation, his dreams mocked to death by time. That is the life of men.",
      ],
      toSelectableNodes = function(paragraphs){
        var nodes = [];
        for(var i =0; i < paragraphs.length; i++){
          var words = paragraphs[i].split(" ");
          for(var j =0; j < words.length; j++){
            nodes.push({text: words[j]});
          }
          nodes.push({text: '', linebreak: true});
        }
        return nodes;
      };

  var game = {
    from: "Their Eyes Were Watching God",
    by: "Zora Neal Hurston",
    passage: toSelectableNodes(paragraphs)
  };
  $scope.game = game;
}]);