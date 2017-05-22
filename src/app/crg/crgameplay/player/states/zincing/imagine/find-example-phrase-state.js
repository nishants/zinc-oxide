app.factory("FindExamplePhraseState", ['NoExampleOfPhraseState', 'ChooseExampleOfPhraseState', function (NoExampleOfPhraseState, ChooseExampleOfPhraseState) {
  return function (game, imagine) {
    var state = {
          showInput: false,
          buttons: [
            {
              label: 'Yes',
              onClick: function(){
                imagine.existsInPassage ? function(){alert("Good the text exists")} : game.player.transitTo(NoExampleOfPhraseState(game, imagine)) ;
              }
            },
            {
              label: 'No',
              onClick: function(){
                imagine.existsInPassage ? function(){alert("Oops ! it does exist in passage")} : game.player.transitTo(ChooseExampleOfPhraseState(game, imagine)) ;
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