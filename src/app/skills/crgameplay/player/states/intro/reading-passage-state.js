app.factory("ReadingPassageState", ["DoneReadingPassageState", function (DoneReadingPassageState) {
  return function(game){
    return {
      showInput: false,
      highlightPhrase: [],
      buttons: [
        {
          label: "I am done!",
          onClick: function () {
            game.player.transitTo(DoneReadingPassageState(game))
          }
        }
      ]
    };
  };
}]);