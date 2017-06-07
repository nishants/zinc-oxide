app.factory("AskMultiChoiceQuestion", ["MultiChoiceResult", "CRGGameService", function (MultiChoiceResult, game) {
  return function (data) {
    var state = {
      showInput: false,
      buttons: [
        {
          label: 'Submit',
          onClick: function(){
            game.player.transitTo(MultiChoiceResult(data, state.options));
          }
        }],
      options: data.options.map(function(usage){
        return {
          label: usage.label,
          correct: usage.correct,
        }
      }),
      transcript: {text: data.transcript.text || "Which one of following is not a good example of highlighted phrase ?"},
      highlightPhrase: data.phrase,
      focusPhrase    : data.focus,
    };
    return state;
  };
}]);