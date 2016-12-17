import _ from 'lodash'
import {SUITS, RANKS} from './card'
import Hand from '../components/hand'

export default class Deck {
	constructor(){
		// this.reset()
		this.createDeck = this.createDeck
	}

	shuffle(){
		this.deck = _.shuffle(this.deck)
	}

	deal(){
		return this.deck.pop()
	}

	// reset(){
	// 	this.cards = SUITS.map(suit =>
	// 		RANKS.map(rank => Object.assign( {}, suit, rank ))
	// 	).reduce( (memo, array) => memo.concat( array ))

	// 	this.shuffle()
	// }

	// numVal(){
	// 	return card.rank.value
	// }

	createDeck(){
		const deck = []
		for(let suit of SUITS){
		  for(let rank of RANKS){
			deck.push({suit: suit.suit, rank: rank, name: rank.name, value: rank.value, symbol: suit.symbol})
		  }

		}
		// console.log(deck)
	  return _.shuffle(deck)	
	}
}
