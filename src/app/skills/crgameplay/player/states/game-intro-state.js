app.factory("GameIntroState", [function () {
  return function(){
    return {
      showInput: false,
      buttons: [
        {
          label: "I am done!",
          onClick : function(){

          }
        }
      ]
    };
  };
}]);