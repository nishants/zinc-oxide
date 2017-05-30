app.factory("CRGGameService", ["Passage",function (Passage) {
  var game = {
    passage: null,
    selectedText: null,
    player: null,
    setPassage: function(gameData){
      game.passage = Passage(gameData.passage);
    },
    setFocusText: function(phrase){
      angular.forEach(game.passage.words, function(word, index){
        word.focus = phrase.indices.indexOf(index) > -1;
      })
    },
    highlightText: function(phrase){
      angular.forEach(game.passage.words, function(word, index){
        word.highlight = phrase.indices.indexOf(index) > -1;
      })
    },
    exit: function(){
      window.history.back();
    }
  };
  return game;
}]);