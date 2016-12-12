import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class HelloMessage extends Component {
  render() {
    return <div>{this.props.name}</div>
  }
}

ReactDOM.render(<HelloMessage name={"BlackJack"} />, document.getElementById('root'))
