app.factory("CRGPlayer", ['GameIntroState', function (GameIntroState) {
  var service = {
    create: function(){
      var player = {
        points: 10,
        sound: true,
        state: GameIntroState(),
        exit: function () {
          window.location = "#";
        },
      };
      return player;
    }
  };
  return service;
}]);