app.factory("CRGPlayer", ["CRGGameScript",function (CRGGameScript) {
  var service = {
    create: function(game){
      var player = {
        points: 10,
        sound: true,
        input: '',
        typing: true,
        transitTo: function(state){
          player.state = state;
          player.setHighlightText(state.highlightPhrase);
        },
        state: null,
        exit: function () {
          window.location = "#";
        },
        setHighlightText: function(indices){
          game.highlightText(indices);
        },
        toNextScene: function(){
          player.transitTo(CRGGameScript.next());
        },
        start: function(){
          player.toNextScene();
        }
      };
      return player;
    }
  };
  return service;
}]);