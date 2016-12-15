const SUITS = [
  { suit: "Spade",  symbol: "♠️" },
  { suit: "Club", symbol: "♣️" },
  { suit: "Heart", symbol: "♥️" },
  { suit: "Diamond", symbol: "♦️" }
]

const RANKS = [
	{ name: 'ACE', value: 11 },
	{ name: '2', value: 2 },
	{ name: '3', value: 3 },
	{ name: '4', value: 4 },
	{ name: '5', value: 5 },
	{ name: '6', value: 6 },
	{ name: '7', value: 7 },
	{ name: '8', value: 8 },
	{ name: '9', value: 9 },
	{ name: '10', value: 10 },
	{ name: 'JACK', value: 10 },
	{ name: 'QUEEN', value: 10 },
	{ name: 'KING', value: 10 }
]

const SUITS_TO_SYMBOL = {
  spade: "♠️",
  club:  "♣️",
  heart: "♥️",
  diamond: "♦️"
}

const SUITS_TO_NAME = {
  spade: "SPADE",
  club: "CLUB",
  heart: "HEART",
  diamond: "DIAMOND"
}


//makes values accessible to other files
export default SUITS

module.exports = {
  SUITS_TO_NAME,
  SUITS_TO_SYMBOL,
  SUITS
}
