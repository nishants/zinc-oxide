app.service("CRGPlayer", ["CRGGameScript", "Passage", "$timeout",function (CRGGameScript, Passage, $timeout) {
  var FLASH_TIMEOUT = 3000;
  var player = {
    points: 10,
    sound: true,
    input: '',
    typing: true,
    selectedText: null,
    passage: null,
    exit: function(){
      window.history.back();
    },
    load: function(gameData){
      player.passage = Passage(gameData.passage);
      CRGGameScript.load(gameData.script);
      player.start();
    },
    transitTo: function(state){
      player.state = state;
      player.setHighlightText(state.highlightPhrase);
      player.setFocusText(state.focusPhrase);
    },
    state: null,
    setFocusText: function(phrase){
      angular.forEach(player.passage.words, function(word, index){
        word.focus = phrase.indices.indexOf(index) > -1;
      });
    },
    setHighlightText: function(phrase){
      angular.forEach(player.passage.words, function(word, index){
        word.highlight = phrase.indices.indexOf(index) > -1;
      })
    },
    onTextSelection: function(phrase){
      if(player.state.onTextSelection){
        player.state.onTextSelection(phrase);
      }
    },
    resetSelection: function(){
      window.getSelection().empty();
    },
    flashHighlight: function(phrase, retain){
      player.resetSelection();
      angular.forEach(phrase.indices, function(wordIndex){
        player.passage.words[wordIndex].flash = true;
      });
      if(!retain){
       $timeout(function(){
         angular.forEach(phrase.indices, function(wordIndex){
           player.passage.words[wordIndex].flash = false;
         });
       },FLASH_TIMEOUT);
      }
    },
    toNextScene: function(){
      player.transitTo(CRGGameScript.next());
    },
    start: function(){
      player.toNextScene();
    }
  };
  return player;
}]);