import React, { Component } from 'react'

export class Classclick extends Component {
    
    eventHandler = () => {
        console.log("Enter the valuer 1")
    }
  render() {
    return (
      <div className='goto'>
        {/* <p>{write}</p> */}
        <button type='button' onClick={this.eventHandler}>click</button>
      </div>
    )
  }
}

export default Classclick 