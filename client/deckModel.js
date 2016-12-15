import CardModel from './CardModel'
export default class Deck {
	constructor(suits, ranks){
		console.log('Values', suits, ranks)
		this.card = 'card'
		for(var i = 0; i < suits.length; i++){
			for(var j = 0; j < ranks.length; j++){
				new Card(suits[i], ranks[i])
			}
		}
	}
}
