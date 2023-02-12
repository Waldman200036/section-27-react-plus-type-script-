import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import Todo from './models/todo';
function App() {
  const todos = [
new Todo('Learn React'),
new Todo('Learn Typescript')
  ]

  const addTodoHandler = (todoText:string)=>{

  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
