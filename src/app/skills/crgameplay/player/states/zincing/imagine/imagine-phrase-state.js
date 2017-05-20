app.factory("ImaginePhraseState", ['FindExamplePhraseState', function (FindExamplePhraseState) {
  return function (game) {
    var imagine = game.plan.zincing.imagine[0],
        state   = {
          showInput       : true,
          buttons         : [],
          transcript      : {text: "List three things you imagine when you read the highlighted phrase."},
          highlightPhrase : imagine.phrase,
          submitInput: function (userInput) {
            game.player.transitTo(FindExamplePhraseState(game, imagine));
          }
        };
    return state;
  };
}]);