app.factory("EnterMainIdeaState", [function () {
  return function(player){
    return {
      showInput   : true,
      buttons     : [],
      submitInput : function(userInput){
        console.log("user says : " + userInput);
        player.transitTo({});
      }
    };
  };
}]);