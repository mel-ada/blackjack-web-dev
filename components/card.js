import React, {Component} from 'react'
import SUITS from "../client/card"

class Card extends Component {
  constructor(props){
    super(props)
   
  const {suit, symbol} = this.props
  }
    render() {
      return (
      	<div>{this.props.suit}</div>
      )		
    }
}

export default Card