import React, {Component} from 'react'
import SUITS from "../client/card"


export default class Card extends Component {
  constructor(props){
    super(props)
  }
    render() {
      const {suit, symbol} = this.props
      return <div>{props.suit}</div>

    }
}
