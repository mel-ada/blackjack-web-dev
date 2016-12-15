import {SUITS, SUITS_TO_NAME, SUITS_TO_SYMBOL} from './card'


export default class CardModel {
  constructor(suit, rank, symbol) {
    this.suit = suit
    this.symbol = symbol
    this.rank = rank
  }
}


//In Deck, you'd create a new card let c = new Card('spade', diamond)
