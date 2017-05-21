app.factory("ChooseExampleOfPhraseState", [function () {
  return function (game, imagine) {
    var state = {
      showInput: false,
      buttons: [
        {
          label: 'Proceed',
          onClick: function(){

          }
        }],
      options: imagine.usages.map(function(usage){
        return {
          label: usage.label,
          correct: usage.correct,
        }
      }),
      transcript: {text: "Which one of following is not a good example of highlighted phrase ?"},
      highlightPhrase: imagine.phrase,
      submitInput: function (userInput) {
        console.log("user imagined : " + userInput);
        game.player.transitTo({});
      }
    };
    return state;
  };
}]);