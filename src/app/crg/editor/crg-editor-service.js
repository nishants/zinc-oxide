app.factory("CRGEditorService", [function () {
  var editorService = {
    zincing: {
      visualize: {
        list: [],
        defaultTranscript: "What do you imagine when you read this phrase.",
        add: function (form) {
          editorService.visualize.list.push();
        }
      }
    },
    passageSelector: {
      selecting: false,
      lastScrollOffset: 0,
      whenDone : function(){},
      selectFromPassage: function (params) {
        editorService.passageSelector.selecting = true;
        editorService.passageSelector.whenDone = params.whenDone;
      },
      doneSelecting: function () {
        var focus = {
              text: "Ships at a distance have every man's wish on board.",
              indices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            },
            phrase = {
              text: "Ships at a distance",
              indices: [0, 1, 2, 3, 4],
            };

        editorService.passageSelector.selecting = false;
        editorService.passageSelector.whenDone({
          focus: focus,
          phrase: phrase
        });
      }
    }
  };
  return editorService;
}]);