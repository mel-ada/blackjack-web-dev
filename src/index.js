import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Card from '../client/card'

class BlackJack extends Component {
  render() {
    return <Card hand={this.props.name} />
  }
}

ReactDOM.render(<BlackJack name={"Cards"} />, document.getElementById('root'))
