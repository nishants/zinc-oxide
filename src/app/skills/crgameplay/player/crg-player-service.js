app.factory("CRGPlayer", ['ReadingPassageState', function (ReadingPassageState) {
  var service = {
    create: function(game){
      var player = {
        points: 10,
        sound: true,
        input: '',
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