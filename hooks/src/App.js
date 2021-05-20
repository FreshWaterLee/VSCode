import List from './List.jsx'
import './App.css';
import { useEffect, useState } from 'react';
const App=()=>{
  const [todos,setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState();
  const add_todo =(e)=>{
    e.preventDefault();
    setTodos([...todos,newTodos])
  }
  const changeInputData = (e)=>{
    setNewTodos(e.target.value);
  }
  const fetchInitialData= async ()=>{ // 이전 데이터 저장?
    const response = await fetch('http://localhost:3001/todo');
    const initialData = await response.json();
    setTodos(initialData);
  }
  useEffect(()=>{
    console.log("업데이트!!",todos);
  },[todos])

  useEffect(()=>{
    fetchInitialData();
  },[])
  return (
    // <div className="App">      
        /* <div className="App-Header">
          <h3 className = "App-logo">나를 볼 여유가 있어?</h3>
        </div> */
    <>
    <div>
        <form action="">
          <input type='text' name ='' onChange={changeInputData}/>
          <button onClick={add_todo}>할 일 추가!!</button> {/*mysql과 연동 예상 */}
        </form>
        <List todos = {todos}/>
    </div>
    </>
  );
}

export default App;
