app.directive("typewriter",["$timeout", function($timeout){
  return {
    restrict: "C",
    scope: false,
    link: function(scope, element, attrs){
      if(attrs.text){
        var chars = [],
            $e    = $(element),
            speed = parseInt(attrs.typingSpeed) || 100,
            done  = true,
            lastTimeout,
            beforeTyping = function(){
              $timeout(function(){
                done = false;
                attrs.beforeTyping && scope.$eval(attrs.beforeTyping);
              });
            },
            afterTyping = function(){
              $timeout(function(){
                done = true;
                attrs.afterTyping && scope.$eval(attrs.afterTyping);
              });
            },
            clear = function(){
              $e.html('');
            },
            type = function(){
              clearTimeout(lastTimeout);
              if(chars.length > 0){
                $e.append(chars.shift());
                if(done){
                  beforeTyping();
                }
              }else{
                if(!done){
                  afterTyping();
                }
              }
              lastTimeout = setTimeout(type, speed);
            };
        scope.$watch(attrs.text, function(text){
          clear();
          chars = text.split('');
          clearTimeout(lastTimeout);
          lastTimeout = setTimeout(type, speed);
        });
      }
    }
  };
}])