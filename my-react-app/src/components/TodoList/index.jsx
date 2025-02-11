import React from 'react'
import TodoItem from '../TodoItem/index'

const index = ({todos, removeTodo, toggleTodoCompleted}) => {
  return (
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} {...todo} removeTodo = {removeTodo} toggleTodoCompleted = {toggleTodoCompleted}/>)}
    </ul>
  )
}

export default index
