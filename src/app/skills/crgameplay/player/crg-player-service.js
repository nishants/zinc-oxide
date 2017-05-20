app.factory("CRGPlayer", ['ImaginePhraseState', function (ImaginePhraseState) {
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
      player.transitTo(ImaginePhraseState(game));
      return player;
    }
  };
  return service;
}]);