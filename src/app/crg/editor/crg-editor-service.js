app.factory("CRGEditorService", [function () {
  var editorService = {
    zincing: {
      visualize: {
        list: [],
        defaultTranscript: "What do you imagine when you read this phrase.",
        add: function(form){
          editorService.visualize.list.push({
            phrase: {
              text: "Ships at a distance",
              indices: [0,1,2,3,4],
            },
            focus: {
              text: "Ships at a distance have every man's wish on board.",
              indices: [0,1,2,3,4,5,6,7,8,9],
            },
            transcript: form.transcript || editorService.visualize.defaultTranscript,
          });
        }
      }
    }
  };
  return editorService;
}]);