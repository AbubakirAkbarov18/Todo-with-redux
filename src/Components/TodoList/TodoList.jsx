import { useSelector } from "react-redux"
import './TodoList.css'

const TodoList = () => {
  const todos = useSelector(state => state?.todos)

  console.log(todos);
  return (
    <div className="todolist-wrapper">
        {
          todos &&
          todos.map((todo, index) => (
            <div className="todo" key={index}>
              <p>{todo}</p>
            </div>
          ))
        }
    </div>
  )
}

export default TodoList