app.factory("CRGPlayer", ['ReadingPassageState', function (ReadingPassageState) {
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
      player.state = ReadingPassageState(player);
      return player;
    }
  };
  return service;
}]);