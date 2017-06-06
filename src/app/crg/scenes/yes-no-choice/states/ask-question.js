app.factory("AskQuestion", ['CRGGameService', 'WrongAnswerToYesNo', function (game, WrongAnswerToYesNo) {
  return function (config) {
    var state = {
      showInput: false,
      buttons: [
        {
          label: 'Yes',
          onClick: function(){
            config.expectedYes ? game.player.toNextScene() : game.player.transitTo(WrongAnswerToYesNo(config));
          }
        },
        {
          label: 'No',
          onClick: function(){
            config.expectedYes ? game.player.transitTo(WrongAnswerToYesNo(config)) :  game.player.toNextScene();
          }
        }
      ],
      transcript        : {text: config.question},
      highlightPhrase   : config.phrase,
      focusPhrase       : config.focus
    };
    return state;
  };
}]);