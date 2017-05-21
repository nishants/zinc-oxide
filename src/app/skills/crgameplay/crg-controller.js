app.controller('CRGameplayController', ['$scope', '$timeout', 'CRGPlayer', function ($scope, $timeout, CRGPlayer) {
  var paragraphs = [
        "Ships at distance have every man's wish on board. For some they come in with the tide. For others they sail forever on the horizon, never out of sight, never landing until the watcher turn his eyes away in resignation, his dreams mocked to death by time. That is the life of men.",
        "Now, women forget all those things they don't  want to remember, and remember everything they don't want to forget. The dream is the truth. Then they act and do things accordingly."
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
    plan: {
      zincing: {
        visualize: [
          {
            phrase: [0, 1,2,3,4],
            transcript: 'What do you imagine when you read the text "Ships at a distance"  in first sentence ?'
          },
          {phrase: [34,35,36,37,38,39]},
        ],
        imagine: [
          {
            phrase: [57,58,59,60,61,62,63,64,65],
            existsInPassage: false,
            transcript: 'Which one of following is not a good example of "all those things they don\'t want to remember" ?',
            usages: [
              {
                label: 'A cow eating grass.',
                correct: false,
              },
              {
                label: 'A baby being dropped.',
                correct: true,
              },
              {
                label: 'Getting fired from job.',
                correct: true,
              },
              {
                label: 'A scary nightmare.',
                correct: true,
              },
            ]
          }
        ]
      }
    },
    from: "Their Eyes Were Watching God",
    by: "Zora Neal Hurston",
    passage: toSelectableNodes(paragraphs),
    selectedText: null,
    player: null,
    onSelect: function(indexes){
      $timeout(function(){
        game.selectedText = indexes.map(function (index) {
          return game.passage[index].text;
        }).join(" ");
      });
    },
    highlightText: function(indices){
      angular.forEach(game.passage, function(word, index){
        word.highlight = indices.indexOf(index) > -1;
      })
    }
  };

  game.player = CRGPlayer.create(game);
  $scope.game = game;
}]);