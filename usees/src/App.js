import React, { useEffect, useState } from 'react';
import './App.css';
import List from './List.jsx'

const App = () =>{
  const [todos, setTodos] = useState(['js공부']);
  const [newTodo, setNewTodo] = useState();
  var list = [{id:"_id", name:"name"},{id:"_id", name:"name"},{id:"_id", name:"name"}];
  localStorage.state = list;
  const changeInputData =(e) =>{
    setNewTodo(e.target.value);
  }
  const addTodo = (e) =>{
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }
  useEffect(()=>{ // 원하는 횟수 만큼 페이지를 새로고침할때 사용(?) 예를들면 페이지에서 한번만 받아들이면 되는상황
    console.log("새로운 내용이 렌더링 되었습니다",todos);
  }, [todos.length > 3])
  return (
    <>
    <h1>UseEffect 어플리케이션</h1>
    <form action = "">
      <input type='text' name=''onChange = {changeInputData}/>
      <button onClick = {addTodo}>할일추가</button>
    </form>
    <List todos = {todos}/>
    </>
  )
}

export default App;
