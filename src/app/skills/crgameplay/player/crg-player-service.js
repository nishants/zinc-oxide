app.factory("CRGPlayer", ['GameIntroState', function (GameIntroState) {
  var service = {
    create: function(){
      var player = {
        points: 10,
        sound: true,
        transitTo: function(state){
          player.state = state;
        },
        state: null,
        exit: function () {
          window.location = "#";
        },

      };
      player.state = GameIntroState(player);
      return player;
    }
  };
  return service;
}]);