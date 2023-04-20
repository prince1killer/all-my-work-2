import React, { Component } from 'react'

export class Count extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    return (
      <div className='goto'>
        <div>
          <h1>{this.state.counter}</h1> <br />
          <button onClick={() => this.increment()}>Increment</button>

        </div>
      </div>
    )
  }
}

export default Count