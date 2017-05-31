app.factory("FindAllKeyImages", ["CRGGameService", function (game) {
  var MIN_SELECTION_DISTANCE = 0.5,
      selectionDistance = function(selection, expectedPhrase){
        var common = selection.indices.filter(function(index){
          return expectedPhrase.indices.indexOf(parseInt(index)) > -1;
        });
        return common.length/selection.indices.length;
      },
      selectionIsCloseEnough = function(selected, options){
        var closeEnough = options.filter(function(expected){
          return selectionDistance(selected, expected) > MIN_SELECTION_DISTANCE;
        });
        return closeEnough.length;
      },
      expectedSelectionIndex = function(selected, options){
        var foundOptionIndex = -1;
        options.forEach(function (expected, index) {
          var isExpected = selected.indices.length == expected.indices.length && selectionDistance(selected, expected) == 1;
          foundOptionIndex = isExpected ? index: foundOptionIndex;
        })
        return foundOptionIndex;
      },
      getPhrase = function(keyImage){
        return keyImage.phrase;
      };
  return function (data) {
    var state = {
      showInput         : false,
      buttons           : [],
      transcript        : {text : data.transcript.text || "Alright, there’s a lot to work with here. Highlight everything you can picture. And remember: when you’re Zincing and handles appear on your highlight, that means there’s more than just that word for you to picture. Picturing that word is great, but check it out: it’s part of a longer phrase. See if you can highlight the whole phrase and picture it"},
      highlightPhrase   : {indices: []},
      focusPhrase       : {indices: []},
      expectedSelections  : data.keyImages.map(getPhrase),
      textSelectedIsClose : false,
      expectedCorrectAnswers: data.expectedCorrectAnswers || data.keyImages.length,
      onTextSelection   : function(selectedPhrase){
        var selectedOptionIndex = expectedSelectionIndex(selectedPhrase, state.expectedSelections),
            isCorrect = selectedOptionIndex > -1,
            closeEnough = !isCorrect && selectionIsCloseEnough(selectedPhrase, state.expectedSelections);

        state.textSelectedIsClose = closeEnough;
        isCorrect && state.onCorrectSelection(selectedPhrase,selectedOptionIndex);
      },
      onCorrectSelection: function(phrase, selectedOptionIndex){
        state.expectedSelections.splice(selectedOptionIndex, 1);
        game.player.flashHighlight({indices: phrase.indices.map(function(i){return parseInt(i);})}, true);
        var correctAnsers = data.keyImages.length - state.expectedSelections.length;
        if(correctAnsers == state.expectedCorrectAnswers){
          state.allExpectedPhrasesSelected();
        }
      },
      allExpectedPhrasesSelected: function(){
        game.player.toNextScene();
      }
    };
    return state;
  };
}]);