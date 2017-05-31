app.service("CRGGameScript", ["ReadingPassageState", "VisualizePhraseState", "ImaginePhraseState", "ExitGameState", function (ReadingPassageState, VisualizePhraseState, ImaginePhraseState, ExitGameState) {

  var scenes = [
    {
      groupName: "intro",
      name: "intro",
      entry: ReadingPassageState,
      data: [{}]
    },
    {
      groupName: "zincing",
      name: "zinc-visualize",
      entry: VisualizePhraseState,
      data: []
    },
    {
      groupName: "zincing",
      name: "zinc-imagine",
      entry: ImaginePhraseState,
      data: []
    },
    {
      groupName: "exit",
      name: "exit",
      entry: ExitGameState,
      data: [{}]
    }

  ];
  var script = {
    currentScene : scenes[0],
    scenes: scenes,
    nextDefinedScene: function(){
      return script.scenes.filter(function (scene) {
        return scene.data.length > 0;
      })[0];
    },
    next: function(){
      var currentScene = script.currentScene,
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
      script.currentScene = scenes[0];
      script.getScene("intro").data          = [{}];
      script.getScene("exit" ).data          = [{}];
      script.getScene("zinc-visualize").data = JSON.parse(JSON.stringify(gamePlan.zincing.visualize || []));
      script.getScene("zinc-imagine").data   = JSON.parse(JSON.stringify(gamePlan.zincing.imagine || []));
    }
  };
  return script;
}]);