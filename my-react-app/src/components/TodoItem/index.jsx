import React from 'react'

const index = ({id, completed, text, removeTodo, toggleTodoCompleted}) => {
  return (
    <li key = {id}>
        <input type ='checkbox' checked={completed} onChange={()=> toggleTodoCompleted(id)}/>
        <span>{text}</span>
        <span className='delete' onClick={() => removeTodo(id)}>
        &times;
        </span>
    </li>

  )
}

export default index
