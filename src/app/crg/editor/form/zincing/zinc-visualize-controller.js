app.controller('ZincVisualizeEditorController', ['$scope', '$timeout', 'CRGEditorService', function ($scope, $timeout, CRGEditorService) {

  var defaultTranscript = 'What do you imagine when you read the phrase "<phrase>"?',
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
            zincVisualizeEditor.list.push({
              focus: selection.focus,
              phrase: selection.phrase,
              transcript: {text: defaultTranscript.replace("<phrase>", selection.phrase.text)},
            });
          }
        });
      }
  };
  $scope.zincVisualizeEditor = zincVisualizeEditor;
}]);