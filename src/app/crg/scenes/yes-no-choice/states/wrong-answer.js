app.factory("WrongAnswerToYesNo", ["CRGGameService", function ( game) {
  return function (data) {
    var state = {
      showInput: false,
      buttons: [
        {
          label: 'Proceed',
          onClick: function(){
            game.player.toNextScene();
          }
        }],
      transcript: {text: data.wrongAnswerMessage},
      highlightPhrase: data.phrase,
      focusPhrase    : data.focus
    };
    return state;
  };
}]);