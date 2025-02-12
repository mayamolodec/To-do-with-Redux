import {useSelector} from 'react-redux'
import TodoItem from '../TodoItem/index'

const index = () => {
  const todos = useSelector(state => state.todos.todos);
  return (
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
    </ul>
  )
}

export default index
