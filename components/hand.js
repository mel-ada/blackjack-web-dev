import React, {Component} from 'react'
import Card from './card'
import Deck from '../client/deck'
import _ from 'lodash'


export default class Hand extends Component {
	constructor(props) {
	  super(props)
	  this.hand = this.props.hand || []
	  // console.log(this.cardVal())
	}
	makeCard() {	
	  return this.hand.map((card, index) => <Card key={index} {...card}/>)
	}
	
	handVal(){
		let handValue = 0
		for(let card of this.hand){
			handValue += card.rank.value
			console.log(card)
		}
		return handValue
	}
	cardVal(){
		let cardValue = []
		for(let card of this.hand){
			cardValue.push(card.rank.value)
			console.log(card)
		}
		return cardValue
	}
	isBust(){
		return this.handVal() > 21
	}

	render() {
	  return <div> {this.makeCard()} </div>
	}
}
