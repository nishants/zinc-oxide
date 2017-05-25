app.value("stateMessages", {
  "vocab.view"  : "Opening Vocabulary Set",
  "default"     : "Loading ",
});

app.value("SampleCRGGamePlan", {
  zincing: {
    visualize: [
      {
        phrase: {indices: [0, 1,2,3,4]},
        transcript: {text: 'What do you imagine when you read the text "Ships at a distance"  in first sentence ?'}
      },
      {phrase: {indices: [34,35,36,37,38,39]} ,
        transcript: {text: 'What do you imagine when you read the text "looks aways in resignation"  in first sentence ?'}
      },
    ],
    imagine: [
      {
        phrase: {indices: [57,58,59,60,61,62,63,64,65]},
        existsInPassage: false,
        transcript: {text: 'Which one of following is not a good example of "all those things they don\'t want to remember" ?'},
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
});