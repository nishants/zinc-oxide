require('./scene-editor-controller');
require('./components/set-focus-directive');
require('./components/set-highlight-directive');
require('./components/set-key-image-directive');

require('./intro/states/reading-passage-state');
require('./intro/states/done-reading-passage-state');
require('./intro/states/enter-main-idea-state');
require('./exit/states/exit-game-state');

require('./text-input/text-input-editor');
require('./text-input/states/text-input-state');

require('./yes-no-choice/states/ask-question');
require('./yes-no-choice/states/wrong-answer');
require('./yes-no-choice/yes-no-editor');

require('./multi-choice/multi-choice-editor');
require('./multi-choice/states/ask-multi-choice-question-state');
require('./multi-choice/states/multi-choice-result-state');

require('./key-images/states/find-all-key-images-state');
require('./key-images/states/display-all-key-images-state');
require('./key-images/find-phrase-editor');
