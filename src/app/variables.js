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
  "intro"                 :{
    entry: "ReadingPassageState",
    label: "Main Idea"
  },
  "text-input"            :{
    entry: "VisualizePhraseState",
    label: "Input Text",
    editor: "TextInputEditor",
  },
  "multi-choice"          :{
    entry: "AskMultiChoiceQuestion",
    label: "Multiple Choice Question",
    editor: "MultiChoiceEditor"
  },
  "yes-no"                :{
    entry: "AskQuestion",
    label: "Yes/No Question",
    editor: "MultiChoiceEditor"
  },
  "find-all-key-images"   :{
    entry: "FindAllKeyImages",
    label: "Key Image",
    editor: "MultiChoiceEditor"
  },
  "exit"                  : {
    entry: "ExitGameState",
    label: "Exit"
  }
});