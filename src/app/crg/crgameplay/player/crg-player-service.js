app.factory("CRGPlayer", [function () {
  var service = {
    create: function(game, script){
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
        }
      };
      player.transitTo(ReadingPassageState(game));
      return player;
    }
  };
  return service;
}]);