app.controller('ZincVisualizeEditorController', ['$scope', '$timeout', 'CRGEditorService', function ($scope, $timeout, CRGEditorService) {

  var defaultTranscript = 'What do you imagine when you read the phrase "<phrase>"?',
      zincVisualizeEditor = {
      list: [],
      add: function(){
        var focus = {
              text: "Ships at a distance have every man's wish on board.",
              indices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            },
            phrase = {
              text: "Ships at a distance",
              indices: [0, 1, 2, 3, 4],
            };

        zincVisualizeEditor.list.push({
          focus: focus,
          phrase: phrase,
          transcript: {text: defaultTranscript.replace("<phrase>", phrase.text)},
        });
      }
  };
  $scope.zincVisualizeEditor = zincVisualizeEditor;
}]);