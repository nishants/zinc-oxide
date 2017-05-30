app.factory("NoExampleOfPhraseState", ['ChooseExampleOfPhraseState',"CRGGameService", function (ChooseExampleOfPhraseState, game) {
  return function (imagine) {
    var state = {
      showInput: false,
      buttons: [
        {
          label: 'Proceed',
          onClick: function(){
            game.player.transitTo(ChooseExampleOfPhraseState(imagine));
          }
        }],
      transcript: {text: "Stop trying too hard. There was no example."},
      highlightPhrase: imagine.phrase,
      focusPhrase    : imagine.focus,
      submitInput: function (userInput) {
        game.player.transitTo({});
      }
    };
    return state;
  };
}]);