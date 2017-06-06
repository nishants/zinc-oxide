app.service("MultiChoiceEditor", ['$timeout', 'CRGEditorService', function ($timeout, CRGEditorService) {

  var multiChoiceEditor = {
        addTo: function(group){
          CRGEditorService.addScene(multiChoiceEditor.create(group));
        },
        create: function(group){
          return             {
            "group"       : group,
            "name"        : "multi-choice",
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