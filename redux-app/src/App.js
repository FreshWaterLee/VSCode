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
      <AddNumberRoot></AddNumberRoot>
      <DisplayRoot ></DisplayRoot>
    </div>
    );
  }
}

export default App;
