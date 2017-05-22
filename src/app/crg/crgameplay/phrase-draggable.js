app.directive("phraseDraggable", [function () {

  return {
    restrict: "C",
    scope   : false,
    link    : function (scope, element, attrs) {
      scope.$watch("$selection.indices", function(indices){
        if(indices.length){
          var firstSelectedWord = $(element).find("[data-word-number='<index>']".replace('<index>', indices[0])),
              x = firstSelectedWord.position().top,
              y = firstSelectedWord.position().left;

          $(element).find(".draggable-surface").css("transform", "translateX(<x>px) translateY(<y>px)".replace('<x>', x).replace('<y>',y ));
          console.log(firstSelectedWord);
        }else{
          $(element).find(".draggable-surface").css("transform", "scale(0)");
        }

      }, true);
    }
  };
}]);

