app.factory("VisualizePhraseState", [function () {
  var VisualizePhraseState = function (game) {
    var state = {
      showInput: true,
      buttons: [],
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