app.factory("DoneReadingPassageState", ["EnterMainIdeaState", function (EnterMainIdeaState) {
  return function(game){
    var showInput = function(){
      game.player.transitTo(EnterMainIdeaState(game));
    };

    var state = {
      showInput: false,
      highlightPhrase: [],
      transcript: {text: "Did the passage make sense ?"},
      buttons: [
        {
          label: "Definitely",
          onClick: function () {
            showInput(state);
          }}, {
          label: "Sort of",
          onClick: function () {
            showInput(state);
          }}, {
          label: "Not Really",
          onClick: function () {
            showInput(state);
          }}]
    };
    return state;
  };
}]);