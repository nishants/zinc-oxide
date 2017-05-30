app.factory("ExitGameState", [function () {
  return function () {
    var state = {
      showInput: false,
      buttons: [{
        label: "Exit",
        onClick: function(){
          window.history.back();
        },
      }],
      transcript: {text: "End of game."},
      highlightPhrase: {indices: []},
      focusPhrase    : {indices: []},
    };

    return state;
  };
}]);