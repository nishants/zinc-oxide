app.factory("VisualizePhraseState", [function () {
  var VisualizePhraseState = function (game) {
    var state = {
      showInput: true,
      buttons: [],
      transcript: {text: "VisualizePhraseState"},
      highlightPhrase: game.plan.zincing.visualize.shift().phrase,
      submitInput: function (userInput) {
        console.log("user visualized : " + userInput);
        var nextState = game.plan.zincing.visualize.length ? VisualizePhraseState(game) : {};
        game.player.transitTo(nextState);
      }
    };
    return state;
  };
  return VisualizePhraseState;
}]);