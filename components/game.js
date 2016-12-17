import React, {Component} from 'react';
import Deck from '../client/deck';
import Hand from './hand'
import Game from '../client/game'
import Player from './player'
import { SUITS, RANKS } from '../client/card'

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.deck = new Deck().createDeck() 
    this.state = {
      hand: []
    }
  }

  componentWillMount() {
    this.hit = this.hit
    // this.makeHand = this.makeHand
  }

  makeHand(){
    const hand = []
    this.deck.forEach(card => {
      if(hand.length < 2) {
        hand.push(this.deck.pop())
        this.setState({hand})
      } 
    })
    return hand
  }

  // makePlayer(){
  //   const player1 = []
  //   player1.push()
  //   console.log(player1)
  
  // }
  hit(){
    const hand = this.state.hand.push(this.deck.pop())
    console.log('this is the state', hand)
    // this.setState({hand})
  }

  // switch(){

  // }

  render() {
    return (
      <div>
      <h1>Welcome to BlackJack!</h1>
      <h4>Dealer's Hand</h4>
      <Hand hand={this.makeHand()} />
      <img id="corner" src="../images/backOfCard.jpeg"/>
      <h4>Player's Hand</h4>
      <Hand hand={this.makeHand()} /> 
             <button
          className="btn btn-default"
          style={buttonStyle}
          onClick={this.hit.bind(this)}>Hit</button>
       <button
          className="btn btn-default"
          style={buttonStyle}
          onClick={this.props.handleClick}>Stay</button>

      </div>
    );
  }
}
