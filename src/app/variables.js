app.value("stateMessages", {
  "vocab.view"  : "Opening Vocabulary Set",
  "default"     : "Loading ",
});

app.value("SampleCRGData", {
  passage: {
    from: "Their Eyes Were Watching God",
    by: "Zora Neal Hurston",
    text: "Ships at a distance have every man's wish on board. For some they come in with the tide. For others they sail forever on the horizon, never out of sight, never landing until the watcher turn his eyes away in resignation, his dreams mocked to death by time. That is the life of men. \n Now, women forget all those things they don't  want to remember, and remember everything they don't want to forget. The dream is the truth. Then they act and do things accordingly."
  },
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