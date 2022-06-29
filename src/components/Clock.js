import React, { Component } from 'react'

export class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()};
  }

  render() {
    return (
      <h2>{this.state.date.toLocaleTimeString()}</h2>
    )
  }
}

export default Clock