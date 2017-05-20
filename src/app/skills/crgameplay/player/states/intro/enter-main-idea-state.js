app.factory("EnterMainIdeaState", ["VisualizePhraseState",function (VisualizePhraseState) {
  return function(game){
    return {
      showInput   : true,
      buttons     : [],
      highlightPhrase: [],
      submitInput : function(userInput){
        console.log("user says : " + userInput);
        game.player.transitTo(VisualizePhraseState(game));
      }
    };
  };
}]);