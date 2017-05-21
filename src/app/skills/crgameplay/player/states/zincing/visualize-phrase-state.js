app.factory("VisualizePhraseState", ['ImaginePhraseState', function (ImaginePhraseState) {
  var VisualizePhraseState = function (game) {
    var visualize = game.plan.zincing.visualize.shift();
    var state = {
      showInput: true,
      buttons: [],
      transcript: {text: visualize.transcript || "What do you imagine when you read the highlighted text ?"},
      highlightPhrase: visualize.phrase,
      submitInput: function (userInput) {
        console.log("user visualized : " + userInput);
        var nextState = game.plan.zincing.visualize.length ? VisualizePhraseState(game) : ImaginePhraseState(game);
        game.player.transitTo(nextState);
      }
    };
    return state;
  };
  return VisualizePhraseState;
}]);