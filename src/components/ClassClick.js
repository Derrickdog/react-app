import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log('Button Clicked (Class Component)');
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Component</button>
      </div>
    )
  }
}

export default ClassClick