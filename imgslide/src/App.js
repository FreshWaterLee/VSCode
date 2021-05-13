import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [scrollState,setScrollState]=useState(0);
  const [projectList, setProjectList]=useState([]);
  useEffect(()=>{
    getProjectList().then(docs=>{
      setProjectList(docs);
    })
  })
  const nextButton=()=>{
    count = projectList.length-1 === count? 0:count+1;
  }
  const prevButton=()=>{

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
