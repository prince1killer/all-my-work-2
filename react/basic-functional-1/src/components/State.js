import React,{ Component } from 'react'

class State extends Component {
  constructor(){
    super()
    this.state = {
      message:"we had use counstructor"
    }
  }
  changeMessage(){
    this.setState({
      message:"thanks you"
    })
  }

  render(){
    return (
      <div>
        <table id='table' >
          <tr>
            <th>Props</th>
            <th>States</th>
          </tr>
          <tr>
            <td>props get passed with the components</td>
            <td>state is managed within the components</td>
          </tr>
          <tr>
            <td>Functions parameters</td>
            <td>Variable declear in the function body</td>
          </tr>
          <tr>
            <td>props are immutable</td>
            <td>states are changable</td>
          </tr>
          <tr>
            <td>props-functional components</td>
            <td>useState hooks -functional components</td>
          </tr>
          <tr>
            <td>this.props- class Components</td>
            <td>this.state-class Components</td>
          </tr>
        </table>
  
  
        <h1>Here is State in class</h1>
          <p>{this.state.message}</p>
          <button onClick={()=> this.changeMessage()}>Change</button>
      </div>
    )
  }
}

export default State