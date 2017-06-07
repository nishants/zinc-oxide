app.service("TextInputEditor", ['SceneLoader', function (SceneLoader) {

  var defaultTranscript = 'What do you visualize when you read the phrase "<phrase>"?',
      textInputEditor = {
        createFor: function(group){
          return             {
            "group"       : group,
            "name"        : "multi-choice",
            label         : SceneLoader["text-input"].label,
            "config"      : {
              "phrase": {"indices": [], "text"  : ""},
              "focus": {"indices" : [], "text"  : ""},
              "transcript": {"text"    : ""},
              "options": []
            }
          };
        }
      };
  return textInputEditor;
}]);