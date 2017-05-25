app.factory("CRGGameScript", ["ReadingPassageState", "VisualizePhraseState", function (ReadingPassageState, VisualizePhraseState) {

  return function(gamePlan){
    var script = {
      index : 0,
      scenes: [
        {
          groupName: "intro",
          scene    : "intro",
          entry    : ReadingPassageState,
          data     : [{}]
        },
        {
          groupName: "zincing",
          scene    : "zinc-visualize",
          entry    : VisualizePhraseState,
          data     : [
            {
              phrase: [0, 1,2,3,4],
              transcript: 'What do you imagine when you read the text "Ships at a distance"  in first sentence ?'
            },
            {phrase: [34,35,36,37,38,39]},
          ]
        }
      ],
      next: function(){
        var currentScene = script.scenes[script.index],
            hasMoreSteps = currentScene.data.length > 0,
            nextScene    = hasMoreSteps ? currentScene : script.scenes[++script.index];

        return nextScene.entry(nextScene.data.shift());
      }
    };
    return script;
  };
}]);