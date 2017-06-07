app.factory("MultiChoiceResult", ["CRGGameService", function (game) {
  return function (data, input) {
    var result = data.options.map(function (option, index) {
          return {
            label: option.label,
            correct: option.correct,
            result: input[index].input == option.correct
          }
        }),
        isIncorrect = function (option) {
          return !option.result;
        },
        incorrectAnswer = result.filter(isIncorrect).length > 0,
        message = incorrectAnswer ? data.answerExplanation : "That's correct.";

    var state = {
      showInput: false,
      buttons: [
        {
          label: 'Proceed',
          onClick: function(){
            game.player.toNextScene();
          }
        }],
      result: result,
      transcript: {text: message},
      highlightPhrase: data.phrase,
      focusPhrase    : data.focus,
    };
    return state;
  };
}]);