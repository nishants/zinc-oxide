app.factory("VisualizePhraseState", ['ImaginePhraseState', "CRGGameService", function (ImaginePhraseState, game) {
  var VisualizePhraseState = function (visualize) {
    var state = {
      showInput: true,
      buttons: [],
      transcript: {text: visualize.transcript || "What do you imagine when you read the highlighted text ?"},
      highlightPhrase: visualize.phrase,
      submitInput: function (userInput) {
        console.log("user visualized : " + userInput);
        game.player.toNextScene();
      }
    };
    return state;
  };
  return VisualizePhraseState;
}]);