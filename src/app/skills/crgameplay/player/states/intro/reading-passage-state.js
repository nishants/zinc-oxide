app.factory("ReadingPassageState", ["DoneReadingPassageState", function (DoneReadingPassageState) {
  return function(player){
    return {
      showInput: false,
      buttons: [
        {
          label: "I am done!",
          onClick: function () {
            player.transitTo(DoneReadingPassageState(player))
          }
        }
      ]
    };
  };
}]);