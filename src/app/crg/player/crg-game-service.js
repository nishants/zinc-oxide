app.factory("CRGGameService", ["Passage", "SampleCRGData",function (Passage, gameData) {
  var game = {
    passage: Passage(gameData.passage),
    selectedText: null,
    player: null,
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