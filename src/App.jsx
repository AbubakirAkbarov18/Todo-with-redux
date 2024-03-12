import './App.css'
import TodoAdder from './Components/TodoAdder/TodoAdder'
import TodoList from './Components/TodoList/TodoList'


function App() {

  return (
    <div className='todo-wrapper'>
      <TodoAdder></TodoAdder>
      <TodoList></TodoList>
    </div>
  )
}

export default App
