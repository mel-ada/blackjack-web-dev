const SUITS = [
  { suit: "Spade",  symbol: "♠️" },
  { suit: "Club", symbol: "♣️" },
  { suit: "Heart", symbol: "♥️" },
  { suit: "Diamond", symbol: "♦️" }
]



const SUITS_TO_SYMBOL = {
  spade: "♠️",
  club:  "♣️",
  heart: "♥️",
  diamond: "♦️"
}

const SUITS_TO_NAME = {
  spade: "SPADE"
}


//makes values accessible to other files
export default SUITS

module.exports = {
  SUITS_TO_NAME,
  SUITS_TO_SYMBOL,
  SUITS
}
