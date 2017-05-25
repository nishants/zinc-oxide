app.controller('CRGEditorController', ['$scope', '$timeout', 'CRGEditorService', 'ZincVisualizeEditorService', function ($scope, $timeout, CRGEditorService, ZincVisualizeEditorService) {
  var editor  = CRGEditorService;

  $scope.onTextSelect = function(indexes){
    $timeout(function(){
      var selectedText = indexes.map(function (index) {
        return editor.passage[index].text;
      }).join(" ")

      editor.passageSelector.selection.onTextSelect(indexes, selectedText);
    });
  };

  $scope.game = {
    from: "Their Eyes Were Watching God",
    by: "Zora Neal Hurston",
  };
  $scope.editor = editor;
  $scope.zincVisualizeEditor = ZincVisualizeEditorService;
}]);