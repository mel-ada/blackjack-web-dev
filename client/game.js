import Deck from './deck'

const WIN = 'win'
const LOSE = 'lose'
const FAIL = 'fail'
const BLACKJACK = 'BLACKJACK'

export default class Game {
  constructor() {
    this.deck = new Deck()
    this.players = [
      { name: "dealer", hand: [], lowestHandValue: 0, highestHandValue: 0, stay: false, bestHandValue: 0},
      { name: "player", hand: [], lowestHandValue: 0, highestHandValue: 0, stay: false, bestHandValue: 0  }
    ]

    this.deal()

    this.status = ''
    this.message = ''
    this.deal = this.deal
  }

  deal() {
    const { players, deck } = this

    _.times( 2, () => {
      players.forEach( player => {
        this.hit(player)
      })
    })
    const player = this.players[1]
    const hand = player.hand

    const isBlackJack = (card) =>
      card.name === 'JACK' && ( card.suit === 'Spade' || card.suit === 'Club' )

    if (
      hand.length === 2 &&
      player.bestHandValue === 21 &&
      (isBlackJack(hand[0]) || isBlackJack(hand[1]))
    ){
      this.status === BLACKJACK
    }
    this.updateStatus()
  }

  updateStatus() {
    if( this.status === '' ) {
      this.message = ''
    } else if (this.status === BLACKJACK) {
      this.message = 'Ready to start blackjack?'
    } else if (this.status === FAIL) {
      this.message = 'Welp! No sympathy from me.'
    } else if( this.status === LOSE ) {
      this.message = 'Sucks for you. You lose!'
    } else if (this.status === WIN ) {
      this.message = 'You won the game!'
    }
  }

  stay( player ) {
    const {hand, stay} = player
    const dealer = this.players[ 0 ]

    player.stay = true

    if (player.bestHandValue < 21 && hand.length === 5) {this.status = WIN}
    else if (dealer.bestHandValue >= player.bestHandValue && player.stay === true) {this.status = FAIL}
    else {
      while( bestHandValue( dealer.hand ) < 17 && bestHandValue(dealer.hand) < bestHandValue( player.hand ) ) {
        this.hit( dealer )
      }
    }

    if (dealer.bestHandValue < player.bestHandValue && player.stay === true) this.status = WIN
    if (dealer.bestHandValue > player.bestHandValue && player.stay === true) this.status = LOSE
    if (dealer.bestHandValue > 21 ) this.status = WIN
    if (dealer.bestHandValue === player.bestHandValue ) this.status = LOSE

    this.updateStatus()

  }

  hit( player ) {

    const { hand, stay } = player
    const dealer = this.players[ 0 ]

    if (player.lowestHandValue < 21) hand.push( this.deck.deal() )

    player.lowestHandValue = lowestHandValue(hand)
    player.highestHandValue = highestHandValue(hand)
    player.bestHandValue = bestHandValue(hand)

    if (player.bestHandValue > 21) this.status = LOSE
    if (player.bestHandValue )
    this.updateStatus()
  }
}


const lowestHandValue = hand =>
  hand.reduce( (total, card) => {
    if (card.name === 'ACE') return total + 1
    return total + card.value
  } , 0)

const highestHandValue = hand =>
  hand.reduce( (total, card) => total + card.value, 0 )

const bestHandValue = hand => {
  let handValue = highestHandValue(hand)
  let numAces = hand.filter(card => card.name === "ACE" ).length
  while (handValue > 21 && numAces > 0) {
    handValue -= 10
    numAces -= 1
  }
  return handValue
}
