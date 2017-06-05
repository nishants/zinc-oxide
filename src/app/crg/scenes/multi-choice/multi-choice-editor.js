app.service("ZincImagineEditorService", ['$timeout', 'CRGEditorService', function ($timeout, CRGEditorService) {

  var defaultTranscript = 'List three things you imagine when you read the highlighted phrase : <phrase>',
      zincImagineEditor = {
        list: [],
        remove: function(index){
          zincImagineEditor.list.splice(index, 1);
        },
        add: function(){
          CRGEditorService.passageSelector.selectFromPassage({
            focus: false,
            phrase: true,
            whenDone: function(selection){
              CRGEditorService.game.zincing.imagine.push({
                focus: selection.focus,
                phrase: selection.phrase,
                usages: [],
                transcript: {text: defaultTranscript.replace("<phrase>", selection.phrase.text)},
              });
            }
          });
        }
      };
  return zincImagineEditor;
}]);