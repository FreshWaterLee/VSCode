// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>Let's develop management System</h2>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { Component } from 'react'
// import './App.css';
// export default class App extends Component {
//   state = {
//     testbody : "",
//   }

//   handleChange =(e)=>{
//     this.setState({
//       [e.target.name] : e.target.value,
//     });
//   }

//   submitId = ()=>{
//     const post ={
//       test : this.state.testbody,
//     };
   
//     fetch("http://localhost:3001/idplz", {
//       method : "post", // 통신방법
//       headers : {
//         "content-type" : "application/json",
//       },
//       body : JSON.stringify(post),
//     })
//     .then((res)=>res.json())
//     .then((json)=>{
//       this.setState({
//         testbody : json.text,
//       });
//     });
//   };

//   render() {
//     return (
//       <div>
//         <input onChange={this.handleChange} name ="testbody"/>
//         <button onClick = {this.submitId}>Submit</button>
//         <h1>{this.state.testbody}</h1>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  state = {
    id : "",
  }

  handleChange =(e)=>{
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  submitId = ()=>{
    const post ={
      plzid : this.state.id,
    };
   
    fetch("http://localhost:3001/idplz", {
      method : "post", // 통신방법
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(post),
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} name ="id"/>
        <button onClick = {this.submitId}>Submit</button>
        <h1>{this.state.id}</h1>
      </div>
    )
  }
}