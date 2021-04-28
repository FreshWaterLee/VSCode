import React, {Component} from 'react';
import './App.css';
import AddNumberRoot from "./Components/AddNumroot";
import DisplayRoot from "./Components/DisplayRoot";

class App extends Component {
  state = {number :0}
  render(){
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot onClick = {function(size){
        this.setState({number : this.state.number + size});
      }.bind(this)}></AddNumberRoot>
      <DisplayRoot number = {this.state.number}></DisplayRoot>
    </div>
    );
  }
}

export default App;
