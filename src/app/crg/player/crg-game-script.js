app.service("CRGGameScript", ["SceneLoader", "$injector", function (SceneLoader, $injector) {

  var getSceneLoader = function(name){
    return $injector.get(SceneLoader[name].entry);
  };

  var
      script = {
        scenes    : [],
        sceneIndex: -1,
        next: function(){
          var nextScene = script.scenes[script.sceneIndex++];
          return getSceneLoader(nextScene.name)(nextScene.config);
        },
        load: function(scriptData){
          script.scenes     = scriptData.scenes;
          script.sceneIndex = 0;
        }
      };
  return script;
}]);