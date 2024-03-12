import { useState } from 'react'
import './TodoAdder.css'
import { useDispatch } from 'react-redux'

const TodoAdder = () => {
  let [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  function addingTodo(e){
    e.preventDefault()
    if(todo.trim().length >= 3){
      setTodo('')
      dispatch({type: 'NEW_TODO', todo: todo})
    }
  }

console.log(todo);

  return (
   <>
     <form onSubmit={addingTodo}>
        <input minLength={3} type="text" placeholder='Add Todo' value={todo} onChange={(e) => {setTodo(e.target.value)}}/>
      <div>
        <button className='todoadder-btn'>Add</button>
      </div>
    </form>
   </>
  )
}

export default TodoAdder