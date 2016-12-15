import React, {Component} from 'react';
import Deck from '../client/deckModel';
import Card from './card.js';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};




export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    //const deck = new Deck().map()
    return (
      <div>
      <img src="../images/backOfCard.jpeg"/>
        <button
          className="btn btn-default"
          style={buttonStyle}
          onClick={this.props.handleClick}>Play</button>
          <button
            className="btn btn-default"
            style={buttonStyle}
            onClick={this.props.handleClick}>New Game</button>

      </div>

    );
  }
}
