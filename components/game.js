import React, {Component} from 'react';
import Card from './card';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};




export default class Button extends Component {
  render() {
    return (
      <div>
        {/* <Card suit={c.suit} symbol={c.symbol}/> */}
        <Card />
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
