app.factory("CRGEditorService", ["Passage", function (Passage) {
  var scrollTime = 500,
      scrollBackOffset = 200,
      scrollTo = function(position, then){
        $("html, body").stop().animate({scrollTop:position}, scrollTime, 'swing', then || function(){});
      },
      currentScrollPosition = function(){
        return $(window).scrollTop();
      },
      editorService = {
        passage: Passage("p1 \n p2"),
    zincing: {
      visualize: {
        list: [],
        defaultTranscript: "What do you imagine when you read this phrase.",
        add: function (form) {
          editorService.visualize.list.push();
        }
      }
    },
        prepareGamePlan : function(){
          return {
            zincing: {
              visualize: [
                {
                  phrase: [0, 1,2,3,4],
                  transcript: 'What do you imagine when you read the text "Ships at a distance"  in first sentence ?'
                },
                {phrase: [34,35,36,37,38,39]},
              ],
              imagine: [
                {
                  phrase: [57,58,59,60,61,62,63,64,65],
                  existsInPassage: false,
                  transcript: 'Which one of following is not a good example of "all those things they don\'t want to remember" ?',
                  usages: [
                    {
                      label: 'A cow eating grass.',
                      correct: false,
                    },
                    {
                      label: 'A baby being dropped.',
                      correct: true,
                    },
                    {
                      label: 'Getting fired from job.',
                      correct: true,
                    },
                    {
                      label: 'A scary nightmare.',
                      correct: true,
                    },
                  ]
                }
              ]
            }
          };
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