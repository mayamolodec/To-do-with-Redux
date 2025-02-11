import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList/index'
import InputField from './components/InputField/index'

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const toggleTodoCompleted = (todoId) => {
    setTodos(todos.map(todo => {
      if (todo.id != todoId) return todo;

      return {
        ... todo,
        completed: !todo.completed,
      }
    })
    );
  }

  function addTodo() {
    if (text.trim().length) {
      setTodos([...todos,
      {
        id: crypto.randomUUID(),
        text: text,
        completed: false
      }
      ]);
      setText('');
    }

  }

  const removeTodo = (todoId) =>{
    setTodos(todos.filter(todo => todo.id != todoId));
  }

  return (
    <div className='App'>
<InputField text={text} handleInput={setText} handleSubmit={addTodo}/>
<TodoList todos={todos} toggleTodoCompleted={toggleTodoCompleted} removeTodo={removeTodo}/>
    </div>
  )
}

export default App
