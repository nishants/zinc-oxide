app.factory("ReadingPassageState", ["DoneReadingPassageState", function (DoneReadingPassageState) {
  return function(game){
    return {
      showInput: false,
      highlightPhrase: [],
      transcript: {text: "Before Attempting any skills, read the passage to the left."},
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