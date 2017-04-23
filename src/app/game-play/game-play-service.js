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
			var
			_current_index = -1,
			gamePlay = {
				vocabset: {
					id: 2,
					title: data.deck.set_title,
					image: data.deck.set_image_url
				},
				words: data.deck.words.map(toWord),
				challenges: data.deck.words.map(function (word) {
					var word = toWord(word);
					return {
						mode: {image: true},
						word: word
					}
				}),
				current: null,
				_current_index: null,
				next: function(){
					gamePlay.current = gamePlay.challenges[++_current_index];
				},
				hasNext: function(){
					return _current_index < gamePlay.challenges.length - 1;
				},
				skip: function () {
					gamePlay.next();
				}
			};
			return gamePlay;
		}
	}
}]);