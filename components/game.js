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
  }

  makeHand(){
    const hand = []
    this.deck.forEach(card => {
      if(hand.length < 2) {
        hand.push(card)  
      } 
    })
    return hand
  }

  makePlayer(){
    const player1 = []
  
  }

  hit(){
    //give player one more card
    //update hand value 
  }

  switch(){

  }

  render() {
    return (
      <div>
       <button
          className="btn btn-default"
          style={buttonStyle}
          onClick={this.props.handleClick}>Hit</button>
       <button
          className="btn btn-default"
          style={buttonStyle}
          onClick={this.props.handleClick}>Stay</button>
      <img src="../images/backOfCard.jpeg"/>
        <button
          className="btn btn-default"
          style={buttonStyle}
          onClick={this.props.handleClick}>Play</button>
          <button
            className="btn btn-default"
            style={buttonStyle}
            onClick={this.props.handleClick}>New Game</button>
        <Hand hand={this.makeHand()} />    
        <Player player={this.makePlayer()} />

      </div>

    );
  }
}
