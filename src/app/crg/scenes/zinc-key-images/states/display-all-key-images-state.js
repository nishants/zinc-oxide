app.factory("DisplayAllKeyImages", ["CRGGameService",function (game) {

  return function(data){
    var allImagesWords = data.keyImages.map(function(keyImage){return keyImage.phrase.indices;}).join().split(",").map(function(index){return parseInt(index)});

    game.player.flashHighlight({indices: allImagesWords}, true)
    return {
      showInput   : false,
      buttons     : [{
        label: "Proceed",
        onClick: function(){
          game.player.toNextScene();
        },
      }],
      highlightPhrase: {indices: data.keyImages.map(function(keyImage){return keyImage.phrase.indices;}).join().split(",").map(function(index){return parseInt(index)})},
      focusPhrase    : {indices: []},
      transcript: {text: "Here’s everything we found."}
    };
  };
}]);