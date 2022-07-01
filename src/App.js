// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import MyComponent from './components/MyComponent';
import Message from './components/Message';
import Counter from './components/Counter'
import Clock from './components/Clock'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <Clock />
      <Message />
      <Counter />
      <br />
      <h2>Event Handlers</h2>
      <FunctionClick />
      <ClassClick />
      <br />
      <EventBind />
      <br />
      <div>Methods as Props</div>
      <ParentComponent />
      {/* <br />
      <UserGreeting />
      <NameList /> */}
    </div>
    // <div className="App">
    //   <Greet name="Bruce" heroName="Batman">
    //     <p>This is children props</p>
    //   </Greet>
    //   <Greet name="Peter" heroName="Spiderman">
    //     <button>Action</button>
    //   </Greet>
    //   <Greet name="Derrick" heroName="Superman"/>
    //   <br />
    //   <Welcome name="Awesome" heroName="Captain"></Welcome>
    //   <Welcome name="Lit" heroName="Scott"></Welcome>
    // </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.onClickBtn = this.onClickBtn.bind(this);
//     this.state = {
//       count: 0
//     };
//     this.countUp = this.countUp.bind(this);
//   }

//   countUp() {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }

//   onClickBtn() {
//     alert('Button has been clicked');
//   }

//   render() {
//     return (
//       <div className="App">
//         <MyComponent title="React" onButtonClicked={this.onClickBtn} />
//         <br />
//         <button onClick={this.countUp}>Counter</button>
//         <p>{this.state.count}</p>
//       </div>
//     )
//   }
// }

export default App;
