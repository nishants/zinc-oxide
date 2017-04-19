angular.module("zinc").service("GamePlayService", ["$http", function ($http) {
	var toWord = function(data){
		return {
			name: data.word,
			audio: data.pronunciation_audio,
			synonym: {
				options: data.synonym_option_names,
				correct : data.correct_synonym
			}
		};
	};
	return {
		create: function(data){
			return {
				title: data.deck.set_title,
				image: data.deck.set_image_url,
				words: data.deck.words.map(toWord)
			};
		}
	}
}]);