app.service("TextInputEditor", ['$timeout', 'CRGEditorService', function ($timeout, CRGEditorService) {

  var defaultTranscript = 'What do you visualize when you read the phrase "<phrase>"?',
      textInputEditor = {
        list: [],
        remove: function(index){
          textInputEditor.list.splice(index, 1);
        },
        add: function(){
          CRGEditorService.passageSelector.selectFromPassage({
            focus: true,
            phrase: true,
            whenDone: function(selection){
              CRGEditorService.game.zincing.visualize.push({
                focus: selection.focus,
                phrase: selection.phrase,
                transcript: {text: defaultTranscript.replace("<phrase>", selection.phrase.text)},
              });
            }
          });
        }
      };
  return textInputEditor;
}]);