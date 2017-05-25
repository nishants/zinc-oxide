app.factory("CRGEditorService", ["Passage", "PassageSelector", function (Passage, PassageSelector) {
  var editorService = {
        passage: Passage("p1 \n p2"),
        prepareGamePlan : function(){
          return {
            zincing: {
              visualize: [
                {
                  phrase: [0, 1,2,3,4],
                  transcript: 'What do you imagine when you read the text "Ships at a distance"  in first sentence ?'
                },
                {phrase: [34,35,36,37,38,39]},
              ],
              imagine: [
                {
                  phrase: [57,58,59,60,61,62,63,64,65],
                  existsInPassage: false,
                  transcript: 'Which one of following is not a good example of "all those things they don\'t want to remember" ?',
                  usages: [
                    {
                      label: 'A cow eating grass.',
                      correct: false,
                    },
                    {
                      label: 'A baby being dropped.',
                      correct: true,
                    },
                    {
                      label: 'Getting fired from job.',
                      correct: true,
                    },
                    {
                      label: 'A scary nightmare.',
                      correct: true,
                    },
                  ]
                }
              ]
            }
          };
        },
    passageSelector: PassageSelector
  };
  return editorService;
}]);