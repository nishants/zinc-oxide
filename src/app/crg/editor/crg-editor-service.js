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
        current : {text: '',indices: []},
        selectingFocus: false,
        selectingPhrase: false,
        focus : {text: '',indices: []},
        phrase: {text: '',indices: []},
        selectFocus: function(){
          editorService.passageSelector.selection.selectingFocus  = true;
          editorService.passageSelector.selection.selectingPhrase = false;
        },
        selectPhrase: function(){
          editorService.passageSelector.selection.selectingFocus  = false;
          editorService.passageSelector.selection.selectingPhrase = true;
        },
        setFocus: function(){
          editorService.passageSelector.selection.focus  = editorService.passageSelector.selection.getTextSelection();
          editorService.passageSelector.selection.selectPhrase();
        },
        setPhrase: function(){
          editorService.passageSelector.selection.phrase  = editorService.passageSelector.selection.getTextSelection();
          editorService.passageSelector.doneSelecting(
              editorService.passageSelector.selection.focus,
              editorService.passageSelector.selection.phrase
          );
        },
        onTextSelect: function(indices, text){
          editorService.passageSelector.selection.current.indices = indices;
          editorService.passageSelector.selection.current.text = text;
        },
        getTextSelection: function(){
          return {
            indices: editorService.passageSelector.selection.current.indices,
            text: editorService.passageSelector.selection.current.text
          };
        }
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
        editorService.passageSelector.selection.selectFocus();
      },

      doneSelecting: function (focus, phrase) {
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