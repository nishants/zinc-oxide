app.controller('CRGEditorController', ['$scope', '$timeout', 'CRGEditorService', 'SceneEditors', function ($scope, $timeout, CRGEditorService, SceneEditors) {
  var editor  = CRGEditorService;

  $scope.onTextSelect = function(indexes){
    $timeout(function(){
      var selectedText = indexes.map(function (index) {
        return editor.passageSelector.passage.words[index].text;
      }).join(" ")

      editor.passageSelector.selection.onTextSelect(indexes, selectedText);
    });
  };

  editor.sceneEditors = SceneEditors;
  $scope.editor = editor;
}]);