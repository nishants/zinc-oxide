app.controller('CRGEditorController', ['$scope', '$timeout', 'CRGEditorService', function ($scope, $timeout, CRGEditorService) {

  $scope.onTextSelect = function(indexes){
    $timeout(function(){
    });
  };

  var editor  = CRGEditorService;

}]);