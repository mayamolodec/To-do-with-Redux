import { useDispatch } from 'react-redux' 
import { removeTodo } from '../../store/todoSlice'
import { toggleTodoCompleted } from '../../store/todoSlice';

const index = ({id, completed, text}) => {
const dispatch = useDispatch();

  return (
    <li key={id}>
        <input type ='checkbox' checked={completed} onChange={()=> dispatch(toggleTodoCompleted({id}))}/>
        <span>{text}</span>
        <span className='delete' onClick={() => dispatch(removeTodo({id}))}>
        &times;
        </span>
    </li>

  )
}

export default index
