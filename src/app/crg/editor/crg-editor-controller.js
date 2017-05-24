app.controller('CRGEditorController', ['$scope', '$timeout', 'CRGEditorService', function ($scope, $timeout, CRGEditorService) {



  var editor  = CRGEditorService;
  var passage = {
    textSelected: function(){

    },
    select: function(params){
      var args = params.sceneName || params.selectFocus || params.selectPhrase;
    }
  };

  $scope.onTextSelect = function(indexes){
    $timeout(function(){
    });
  };

  $scope.editor = editor;
  $scope.passage = passage;
}]);