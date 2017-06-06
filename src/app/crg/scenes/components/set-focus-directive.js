app.directive("setFocus", ['CRGEditorService', function(CRGEditorService){

  return {
    restrict : "A",
    scope    : false,
    link     : function(scope, element, attrs){
      element.on("click", function(){
        CRGEditorService.passageSelector.selectFocusFromPassage({
          focus: true,
          whenDone: function(selection){
            scope.scene.config.focus = selection.focus;
          }
        })
      });
    }
  };
}]);