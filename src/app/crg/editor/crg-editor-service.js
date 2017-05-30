app.factory("CRGEditorService", ["Passage", "PassageSelector", "SampleCRGData", function (Passage, PassageSelector, gameData) {
  var editorService = {
        passage: Passage(gameData.passage),
        game: {
          zincing: {
            visualize: [
              {
                phrase: {
                  indices: [0, 1,2,3,4],
                  text : 'Ships at a distance',
                },
                focus: {
                  indices: [0, 1,2,3,4,5,6,7,8,9],
                  text :"Ships at a distance have every man's wish on board",
                },
                transcript: {
                  text: 'What do you imagine when you read the text "Ships at a distance"  in first sentence ?'
                }
              }
            ],
            imagine: []
          }
        },
        prepareGamePlan : function(){
          return JSON.parse(JSON.stringify(editorService.game));
        },
    passageSelector: PassageSelector
  };
  return editorService;
}]);