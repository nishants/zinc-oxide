app.factory("CRGEditorService", ["Passage", "PassageSelector", function (Passage, PassageSelector) {
  var editorService = {
        passage: Passage("p1 \n p2"),
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
                transcript: 'What do you imagine when you read the text "Ships at a distance"  in first sentence ?'
              }
            ],
            imagine: []
          }
        },
        prepareGamePlan : function(){
          return editorService.game;
        },
    passageSelector: PassageSelector
  };
  return editorService;
}]);