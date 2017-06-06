app.factory("VisualizePhraseState", ["CRGGameService", function ( game) {
  var VisualizePhraseState = function (visualize) {
    var state = {
      showInput: true,
      buttons: [],
      transcript: {text: visualize.transcript.text || "What do you imagine when you read the highlighted text ?"},
      highlightPhrase: visualize.phrase,
      focusPhrase    : visualize.focus,
      submitInput: function (userInput) {
        console.log("user visualized : " + userInput);
        game.player.toNextScene();
      }
    };
    return state;
  };
  return VisualizePhraseState;
}]);