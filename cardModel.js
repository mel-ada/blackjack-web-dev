import {SUITS, SUITS_TO_NAME, SUITS_TO_SYMBOL}  from "../client/card"

class Card {
  constructor(suit, symbol) {
    this.suit = suit
    this.symbol = SUITS_TO_SYMBOL[symbol]
  }
}

//In Deck, you'd create a new card let c = new Card('spade', diamond)
