app.factory("CRGEditorService", [function () {
  var scrollTime = 500,
      scrollBackOffset = 200,
      scrollTo = function(position, then){
        $("html, body").stop().animate({scrollTop:position}, scrollTime, 'swing', then || function(){});
      },
      currentScrollPosition = function(){
        return $(window).scrollTop();
      },
      editorService = {
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
      selection: {
        selectingFocus: false,
        selectingPhrase: false,
        focus : {text: '',indices: []},
        phrase: {text: '',indices: []},
      },
      whenDone : function(){},
      reset    : function(){
        editorService.passageSelector.lastScrollOffset = 0;
        editorService.passageSelector.selecting = false;
        editorService.passageSelector.whenDone = function(){};
        editorService.passageSelector.selection.focus  = {text: '',indices: []};
        editorService.passageSelector.selection.phrase = {text: '',indices: []};
        editorService.passageSelector.selection.selectingFocus  = false;
        editorService.passageSelector.selection.selectingPhrase = false;
      },
      selectFromPassage: function (params) {
        editorService.passageSelector.lastScrollOffset = currentScrollPosition();
        scrollTo(0);
        editorService.passageSelector.selecting = true;
        editorService.passageSelector.whenDone = params.whenDone;
        editorService.passageSelector.selectFocus();
      },
      selectFocus: function(){
        editorService.passageSelector.selection.selectingFocus  = true;
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

        editorService.passageSelector.whenDone({
          focus: focus,
          phrase: phrase
        });
        scrollTo(editorService.passageSelector.lastScrollOffset + scrollBackOffset);
        editorService.passageSelector.reset();
      }
    }
  };
  return editorService;
}]);