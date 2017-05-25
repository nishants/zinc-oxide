app.service("CRGGameScript", ["ReadingPassageState", "VisualizePhraseState", "ImaginePhraseState", function (ReadingPassageState, VisualizePhraseState, ImaginePhraseState) {

  var script = {
    index : 0,
    scenes: [
      {
        groupName: "intro",
        name     : "intro",
        entry    : ReadingPassageState,
        data     : [{}]
      },
      {
        groupName: "zincing",
        name     : "zinc-visualize",
        entry    : VisualizePhraseState,
        data     : []
      },
      {
        groupName: "zincing",
        name     : "zinc-imagine",
        entry    : ImaginePhraseState,
        data     : []
      }
    ],
    nextDefinedScene: function(){
      return script.scenes.filter(function (scene) {
        return scene.data.length > 0;
      })[0];
    },
    next: function(){
      var currentScene = script.scenes[script.index],
          hasMoreSteps = currentScene.data.length > 0,
          nextScene    = hasMoreSteps ? currentScene : script.nextDefinedScene();

      return nextScene ? nextScene.entry(nextScene.data.shift()): alert("End of game");
    },
    getScene: function(name){
      return script.scenes.filter(function(scene){
        return name == scene.name;
      })[0];
    },
    load: function(gamePlan){
      script.index=0;
      script.getScene("intro").data          = [{}];
      script.getScene("zinc-visualize").data = gamePlan.zincing.visualize;
      script.getScene("zinc-imagine").data   = gamePlan.zincing.imagine;
    }
  };
  return script;
}]);