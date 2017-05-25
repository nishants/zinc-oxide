app.factory("ExitGameState", ["CRGGameService", function (game) {
  return function () {
    var state = {
      showInput: false,
      buttons: [],
      transcript: {text: ""},
      highlightPhrase: {indices: []},
      submitInput: function (userInput) {

      }
    };
    game.exit();
    return state;
  };
}]);