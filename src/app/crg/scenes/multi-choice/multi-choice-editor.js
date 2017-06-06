app.service("MultiChoiceEditor", ['SceneLoader', function (SceneLoader) {

  var multiChoiceEditor = {
        createFor: function(group){
          return             {
            "group"       : group,
            "name"        : "multi-choice",
            label         : SceneLoader["multi-choice"].label,
            "config"      : {
              "phrase": {"indices": [], "text"  : ""},
              "focus": {"indices" : [], "text"  : ""},
              "transcript": {"text"    : ""},
              "options": []
            }
          };
        }
      };
  return multiChoiceEditor;
}]);