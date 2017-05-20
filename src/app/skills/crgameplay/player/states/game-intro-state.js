app.factory("GameIntroState", [function () {
  return function(player){
    var showInput = function(state){
      state.showInput = true;
      state.buttons   = [];
      state.submitInput = function(userInput){
        console.log("user says : " + userInput);
        player.transitTo({});
      }
    };

    var state = {
      showInput: false,
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