app.value("stateMessages", {
  "vocab.view"  : "Opening Vocabulary Set",
  "default"     : "Loading ",
});

app.value("passageSelectorHeadings", {
  focus  : {
    label       : "Select text for student to focus upon.",
    description   : "This is the part of passage that the student should focus on while answering questions in this scene.",
  },
  highlight  : {
    label       : "Select text to highlight",
    description   : "This is tha part of text that will be highlighted for student to analyze.",
  }
});

app.value("SceneLoader", {
  entries: {
    "intro"                 : "ReadingPassageState",
    "zinc-visualize"        : "VisualizePhraseState",
    "multi-choice"          : "ImaginePhraseState",
    "find-all-key-images"   : "FindAllKeyImages",
    "exit"                  : "ExitGameState"
  }
});