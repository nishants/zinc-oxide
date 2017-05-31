app.factory("FindAllKeyImages", ["CRGGameService", function (game) {
  return function (data) {
    var state = {
      showInput         : false,
      buttons           : [],
      transcript        : {text : data.transcript.text || "Alright, there’s a lot to work with here. Highlight everything you can picture. And remember: when you’re Zincing and handles appear on your highlight, that means there’s more than just that word for you to picture. Picturing that word is great, but check it out: it’s part of a longer phrase. See if you can highlight the whole phrase and picture it"},
      highlightPhrase   : data.keyImages[0].phrase,
      focusPhrase       : {indices: []}
    };
    return state;
  };
}]);