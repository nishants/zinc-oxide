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
    next: function(){
      var currentScene = script.scenes[script.index],
          hasMoreSteps = currentScene.data.length > 0,
          nextScene    = hasMoreSteps ? currentScene : script.scenes[++script.index];

      return nextScene.entry(nextScene.data.shift());
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