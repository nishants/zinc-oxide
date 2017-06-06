app.controller("SceneEditorController", ['$scope', 'MultiChoiceEditor', 'ZincVisualizeEditorService', function ($scope, MultiChoiceEditor, ZincVisualizeEditorService) {

  $scope.sceneEditors  = {
    multiChoice: MultiChoiceEditor
  };
}]);