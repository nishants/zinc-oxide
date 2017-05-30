app.factory("CRGEditorService", ["Passage", "PassageSelector", function (Passage, PassageSelector) {
  var editorService = {
        sceneEditors: {},
        game: null,
        setGameToEdit: function(gameData){
          editorService.game = gameData;
          editorService.passageSelector =  PassageSelector(Passage(gameData.passage));
        },
        prepareGamePlan : function(){
          var gameData = JSON.parse(JSON.stringify(editorService.game));
          gameData.passge ={
            from: "from book",
            by  : "by author",
            text: "this is the text",
          };
          return gameData;
        },
        registerSceneEditor: function(name, editor){
          editorService.sceneEditors[name] = editor;
        },
       passageSelector: null
  };
  return editorService;
}]);