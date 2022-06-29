import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1
    },
    () => {
      console.log('Callback value', this.state.count);
    })

    // this.setState(prevState => ({
    //     count: prevState.count + 1
    // }))
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.increaseCount()}>Increment</button>
      </div>
    )
  }
}

export default Counter