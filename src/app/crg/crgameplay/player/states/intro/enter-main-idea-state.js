app.factory("EnterMainIdeaState", ["VisualizePhraseState", "CRGGameService",function (VisualizePhraseState, game) {
  return function(){
    return {
      showInput   : true,
      buttons     : [],
      highlightPhrase: [],
      transcript: {text: "Describe the main idea in 120 characters or less."},
      submitInput : function(userInput){
        console.log("user says : " + userInput);
        game.player.transitTo(VisualizePhraseState(game));
      }
    };
  };
}]);