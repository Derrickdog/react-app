import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {
    // let message;
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Derrick</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return message;
    return (
        this.state.isLoggedIn ?
        <div>Welcome Derrick</div> :
        <div>Welcome Visitor</div>
    )
    // return this.state.isLoggedIn && <div>Welcome Derrick</div>
  }
}

export default UserGreeting