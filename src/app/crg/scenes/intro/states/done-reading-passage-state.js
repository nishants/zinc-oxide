app.factory("DoneReadingPassageState", ["EnterMainIdeaState", "CRGGameService", function (EnterMainIdeaState, game) {
  return function(){
    var showInput = function(){
      game.player.transitTo(EnterMainIdeaState());
    };

    var state = {
      showInput: false,
      highlightPhrase: {indices: []},
      focusPhrase    : {indices: []},
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