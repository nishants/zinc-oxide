angular.module("zinc").service("GamePlayService", ["$http", function ($http) {
	var toWord = function(data){
		return {
			name: data.word,
			audio: data.pronunciation_audio,
			synonym: {
				options: data.synonym_option_names.map(function (name) {
					return {
						name: name,
						correct :name ==  data.correct_synonym,
					};
				}),
			},
			image: {
				options: data.image_options.map(function (option) {
					return {
						name: option.word,
						url : option.image_medium_url,
						correct: data.image_medium_url == option.image_medium_url
					};
				}),
			}
		};
	};
	return {
		create: function(data){
			var toggleMode = 0;
			gamePlay = {
				vocabset: {
					id: 2,
					title: data.deck.set_title,
					image: data.deck.set_image_url
				},
				words: data.deck.words.map(toWord),
				challenges: data.deck.words.map(function (word) {
					var word = toWord(word);
					toggleMode++;
					return {
						mode: {
							image  : (toggleMode%2 == 1),
							synonym: (toggleMode%2 == 0)
						},
						word: word,
						skipped: false,
						current: false,
					}
				}),
				current: null,
				_current_index: -1,
				next: function(){
					gamePlay.current = gamePlay.challenges[++gamePlay._current_index];
				},
				hasNext: function(){
					return gamePlay._current_index < gamePlay.challenges.length - 1;
				},
				skip: function () {
					gamePlay.current.skipped = true;
					gamePlay.next();
				}
			};
			return gamePlay;
		}
	}
}]);