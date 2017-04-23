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
				vocabset: {
					id: 2,
					title: data.deck.set_title,
					image: data.deck.set_image_url
				},
				words: data.deck.words.map(toWord),
				current : {
					mode: {sentence: false, definition: false,synonym: false,image: true},
					word: {name: "accept"},
					options: [{name: "dearth"}, {name: "receive"}, {name: "aegis"}, {name: "banal"}]
				},
				submit: function(){

				},
				next: function(){

				},
				exit: function(){

				}
			};
		}
	}
}]);