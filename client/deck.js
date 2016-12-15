import _ from 'lodash'

import SUITS from './card'
import RANKS from './rank'

export default class Deck {
	constructor(){
		this.reset()
	}

	shuffle(){
		this.cards = _.shuffle(this.cards)
	}

	deal(){
		return this.cards.pop()
	}

	reset(){
		this.cards = SUITS.map(suit =>
			RANKS.map(rank => Object.assign( {}, suit, rank ))
		).reduce( (memo, array) => memo.concat( array ))

		this.shuffle()
	}

	createDeck(){
		const deck = []
		for(suit in SUITS){
			for(rank in RANKS){
				let symbol = SUITS_TO_SYMBOL[suit]
				//let card = {suit: {suit}, rank:{rank}, symbol:{symbol}}
			}
		}
	}
}
