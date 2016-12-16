import React, {Component} from 'react'
import Card from './card'
import Deck from '../client/deck'
import _ from 'lodash'


export default class Hand extends Component {
	constructor(props) {
	  super(props)
	  this.hand = this.props.hand || []
	}
	makeCard() {	
	  return this.hand.map((card, index) => <Card key={index} {...card}/>)
	}
	render() {
	  return <div> {this.makeCard()} </div>
	}
}
