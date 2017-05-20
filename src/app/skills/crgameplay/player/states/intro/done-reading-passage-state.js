app.factory("DoneReadingPassageState", ["EnterMainIdeaState", function (EnterMainIdeaState) {
  return function(game){
    var showInput = function(){
      game.player.transitTo(EnterMainIdeaState(game));
    };

    var state = {
      showInput: false,
      highlightPhrase: [],
      buttons: [
        {
          label: "I am done!",
          onClick: function () {
            state.buttons = [
              {
                label: "Definitely",
                onClick: function () {
                  console.log("Definitely");
                  showInput(state);
                }}, {
                label: "Sort of",
                onClick: function () {
                  console.log("Sort of");
                  showInput(state);
                }}, {
                label: "Not Really",
                onClick: function () {
                  console.log("Not Really");
                  showInput(state);
                }}]
          }
        }
      ]
    };
    return state;
  };
}]);