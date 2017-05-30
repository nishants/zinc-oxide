app.factory("ImaginePhraseState", ['FindExamplePhraseState',"CRGGameService", function (FindExamplePhraseState, game) {
  return function (imagine) {
    var state   = {
          showInput       : true,
          buttons         : [],
          transcript      : {text: "List three things you imagine when you read the highlighted phrase."},
          highlightPhrase : imagine.phrase,
          focusPhrase    : {indices: []},
          submitInput: function (userInput) {
            game.player.transitTo(FindExamplePhraseState(imagine));
          }
        };
    return state;
  };
}]);