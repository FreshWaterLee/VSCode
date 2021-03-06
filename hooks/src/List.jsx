import React from 'react'

const List =({todos})=>{
    const todoList = todos.map(todo => <li key = {todo.id}>{todo.data}</li>)
    return (
        <ul>
            {todoList}
        </ul>
    )
}

export default List