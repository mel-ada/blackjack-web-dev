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
    this.hit = this.hit
  }

  makeHand(){
    const hand = []
    this.deck.forEach(card => {
      if(hand.length < 2) {
        hand.push(this.deck.pop())
      } 
    })
    this.setState({hand: hand})
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
    this.setState({hand: hand})
  }

  switch(){

  }

  render() {
    return (
      <div>
       <button
          className="btn btn-default"
          style={buttonStyle}
          onClick={this.hit}>Hit</button>
       <button
          className="btn btn-default"
          style={buttonStyle}
          onClick={this.props.handleClick}>Stay</button>
      <Hand hand={this.makeHand()} />
      <img id="corner" src="../images/backOfCard.jpeg"/>
      <Hand hand={this.makeHand()} /> 

      </div>
    );
  }
}
