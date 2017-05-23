app.directive("typewriter",[function(){
  return {
    restrict: "C",
    scope: false,
    link: function(scope, element, attrs){
      if(attrs.text){
        var chars = [],
            $e    = $(element),
            speed = parseInt(attrs.typingSpeed) || 100,
            done  = true,
            clear = function(){
              $e.html('');
            },
            type = function(){
              if(chars.length > 0){
                $e.append(chars.shift());
                if(done){
                  done = false;
                  attrs.beforeTyping && scope.$eval(attrs.beforeTyping);
                }
              }else{
                if(!done){
                  done = true;
                  attrs.afterTyping && scope.$eval(attrs.afterTyping);
                }
              }
            };
        scope.$watch(attrs.text, function(text){
          clear();
          chars = text.split('');
          setInterval(type, speed)
        });
      }
    }
  };
}])