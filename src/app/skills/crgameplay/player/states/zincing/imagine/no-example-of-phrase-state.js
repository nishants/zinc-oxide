app.factory("NoExampleOfPhraseState", ['ChooseExampleOfPhraseState', function (ChooseExampleOfPhraseState) {
  return function (game, imagine) {
    var state = {
      showInput: false,
      buttons: [
        {
          label: 'Proceed',
          onClick: function(){
            game.player.transitTo(ChooseExampleOfPhraseState(game, imagine));
          }
        }],
      transcript: {text: "Stop trying too hard. There was no example."},
      highlightPhrase: imagine.phrase,
      submitInput: function (userInput) {
        game.player.transitTo({});
      }
    };
    return state;
  };
}]);