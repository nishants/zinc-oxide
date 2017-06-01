app.factory("CRGEditorService", ["Passage", "PassageSelector", function (Passage, PassageSelector) {
  var editorService = {
        script: {
          scenes: []
        },
        passage: {
          to: null,
          from: null,
          text: null,
        },
        setGameToEdit: function(gameData){
          editorService.script.scenes   = gameData.script.scenes;
          editorService.passage         = gameData.passage;
          editorService.passageSelector =  PassageSelector(Passage(editorService.passage));
        },
        prepareGamePlan : function(){
          var gameData = JSON.parse(JSON.stringify({
            passage : editorService.passage,
            script  : editorService.script
          }));
          return gameData;
        },
        removeScene: function(sceneToRemove){
          editorService.script.scenes = editorService.script.scenes.filter(function(scene){
            return sceneToRemove !== scene;
          });
        },
       passageSelector: null
  };
  return editorService;
}]);