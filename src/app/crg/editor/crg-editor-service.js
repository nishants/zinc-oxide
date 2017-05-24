app.factory("CRGEditorService", [function () {
  var editorService = {
    zincing: {
      visualize: {
        list: [],
        defaultTranscript: "What do you imagine when you read this phrase.",
        add: function(form){
          editorService.visualize.list.push();
        }
      }
    }
  };
  return editorService;
}]);