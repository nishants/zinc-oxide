app.controller('CRGEditorController', ['$scope', '$timeout', 'CRGEditorService', 'ZincVisualizeEditorService', function ($scope, $timeout, CRGEditorService, ZincVisualizeEditorService) {
  var editor  = CRGEditorService;

  $scope.onTextSelect = function(indexes){
    $timeout(function(){
      var selectedText = indexes.map(function (index) {
        return editor.passageSelector.passage.words[index].text;
      }).join(" ")

      editor.passageSelector.selection.onTextSelect(indexes, selectedText);
    });
  };

  $scope.editor = editor;
  $scope.zincVisualizeEditor = ZincVisualizeEditorService;
}]);