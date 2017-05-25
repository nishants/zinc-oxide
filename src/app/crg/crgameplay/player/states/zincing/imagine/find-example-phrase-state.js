app.factory("FindExamplePhraseState", ['NoExampleOfPhraseState', 'ChooseExampleOfPhraseState', 'CRGGameService', function (NoExampleOfPhraseState, ChooseExampleOfPhraseState, game) {
  return function (imagine) {
    var state = {
          showInput: false,
          buttons: [
            {
              label: 'Yes',
              onClick: function(){
                game.player.transitTo(NoExampleOfPhraseState(imagine))
              }
            },
            {
              label: 'No',
              onClick: function(){
                game.player.transitTo(ChooseExampleOfPhraseState(imagine))
              }
            }
          ],
          transcript: {text: "Well done! \n Lets try something more challenging now. \n Does the author give any specific examples of highlighted phrase"},
          highlightPhrase: imagine.phrase,
          submitInput: function (userInput) {
            console.log("user imagined : " + userInput);
            game.player.transitTo({});
          }
        };
    return state;
  };
}]);