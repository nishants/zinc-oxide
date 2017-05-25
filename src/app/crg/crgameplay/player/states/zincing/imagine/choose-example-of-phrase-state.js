app.factory("ChooseExampleOfPhraseState", ["CRGGameService", function (game) {
  return function (imagine) {
    var state = {
      showInput: false,
      buttons: [
        {
          label: 'Proceed',
          onClick: function(){
            game.player.toNextScene();
          }
        }],
      options: imagine.usages.map(function(usage){
        return {
          label: usage.label,
          correct: usage.correct,
        }
      }),
      transcript: {text: imagine.transcript.text || "Which one of following is not a good example of highlighted phrase ?"},
      highlightPhrase: imagine.phrase
    };
    return state;
  };
}]);