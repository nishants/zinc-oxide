app.service("ZincImagineEditorService", ['$timeout', 'CRGEditorService', function ($timeout, CRGEditorService) {

  var defaultTranscript = 'What do you visualize when you read the phrase "<phrase>"?',
      zincVisualizeEditor = {
        list: [],
        remove: function(index){
          zincVisualizeEditor.list.splice(index, 1);
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
  CRGEditorService.registerSceneEditor("zincImagine", zincVisualizeEditor);
  return zincVisualizeEditor;
}]);