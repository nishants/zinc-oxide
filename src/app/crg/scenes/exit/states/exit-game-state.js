app.factory("ExitGameState", ["CRGGameService", function (game) {
  return function () {
    var state = {
      showInput: false,
      buttons: [{
        label: "Exit",
        onClick: game.exit,
      }],
      transcript: {text: "End of game."},
      highlightPhrase: {indices: []},
      focusPhrase    : {indices: []},
    };

    return state;
  };
}]);