app.service("FindPhraseEditor", ['SceneLoader', function (SceneLoader) {

  var findPhraseEditor = {
        createFor: function(group){
          return             {
            "group"       : group,
            "name"        : "find-all-key-images",
            label         : SceneLoader["find-all-key-images"].label,
            "config":       {
              "transcript" : {"text": ""},
              "expectedCorrectAnswers" : 1,
              "keyImages": []
            }
          };
        }
      };
  return findPhraseEditor;
}]);