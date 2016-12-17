import React, {Component} from 'react'

export default class Card extends Component {
	constructor(props) {
	  super(props)	
	}

    render() {
      const {name, value, suit, symbol} = this.props
      return (
      	<div className="card">
      		{name} {suit} {symbol} 
      	</div>
      )
    }
}


