app.factory("PassageSelector", ["Passage", function (Passage) {
  var scrollTime = 500,
      scrollBackOffset = 200,
      scrollTo = function(position, then){
        $("html, body").stop().animate({scrollTop:position}, scrollTime, 'swing', then || function(){});
      },
      currentScrollPosition = function(){
        return $(window).scrollTop();
      },
      passageSelector = {
        selecting: false,
        lastScrollOffset: 0,
        selection: {
          current: {text: '', indices: []},
          selectingFocus: false,
          selectingPhrase: false,
          focus: {text: '', indices: []},
          phrase: {text: '', indices: []},
          selectFocus: function () {
            passageSelector.selection.selectingFocus = true;
            passageSelector.selection.selectingPhrase = false;
          },
          selectPhrase: function () {
            passageSelector.selection.selectingFocus = false;
            passageSelector.selection.selectingPhrase = true;
          },
          setFocus: function () {
            passageSelector.selection.focus = passageSelector.selection.getTextSelection();
            passageSelector.selection.selectPhrase();
          },
          setPhrase: function () {
            passageSelector.selection.phrase = passageSelector.selection.getTextSelection();
            passageSelector.doneSelecting(
                passageSelector.selection.focus,
                passageSelector.selection.phrase
            );
          },
          onTextSelect: function (indices, text) {
            passageSelector.selection.current.indices = indices;
            passageSelector.selection.current.text = text;
          },
          getTextSelection: function () {
            return {
              indices: passageSelector.selection.current.indices,
              text: passageSelector.selection.current.text
            };
          }
        },
        whenDone: function () {
        },
        reset: function () {
          passageSelector.lastScrollOffset = 0;
          passageSelector.selecting = false;
          passageSelector.whenDone = function () {
          };
          passageSelector.selection.focus = {text: '', indices: []};
          passageSelector.selection.phrase = {text: '', indices: []};
          passageSelector.selection.selectingFocus = false;
          passageSelector.selection.selectingPhrase = false;
        },
        selectFromPassage: function (params) {
          passageSelector.lastScrollOffset = currentScrollPosition();
          scrollTo(0);
          passageSelector.selecting = true;
          passageSelector.whenDone = params.whenDone;
          passageSelector.selection.selectFocus();
        },

        doneSelecting: function (focus, phrase) {
          passageSelector.whenDone({
            focus: focus,
            phrase: phrase
          });
          scrollTo(passageSelector.lastScrollOffset + scrollBackOffset);
          passageSelector.reset();
        }
      }
  ;
  return passageSelector;
}]);