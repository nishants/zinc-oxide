app.service("CRGGameScript", ["SceneLoader", "$injector", function (SceneLoader, $injector) {

  var scenes = [
    {
      groupName: "intro",
      name: "intro",
      entry: $injector.get(SceneLoader.entries["intro"]),
      data: [{}]
    },
    {
      groupName: "zincing",
      name: "zinc-visualize",
      entry: $injector.get(SceneLoader.entries["zinc-visualize"]),
      data: []
    },
    {
      groupName: "zincing",
      name: "zinc-imagine",
      entry: $injector.get(SceneLoader.entries["zinc-imagine"]) ,
      data: []
    },
    {
      groupName: "zincing",
      name: "find-all-key-images",
      entry:  $injector.get(SceneLoader.entries["find-all-key-images"]),
      data: []
    },
    {
      groupName: "exit",
      name: "exit",
      entry: $injector.get(SceneLoader.entries["exit"]),
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

      return nextScene.entry(nextScene.data.shift());
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
      script.getScene("find-all-key-images").data   = JSON.parse(JSON.stringify(gamePlan.zincing.findAllKeyImages || []));
    }
  };
  return script;
}]);