import classes from './NewTodo.module.css'
import { useRef, useContext } from "react";

import { TodosContext } from '../store/todos-context';
const NewTodo: React.FC = () => {
 const todosCtx = useContext(TodosContext)
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value!

    if (enteredText?.trim().length === 0) {
      // throw an error
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  const removeHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //const todo =Todos.
    const enteredText = todoTextInputRef.current?.value!


    todosCtx.removeTodo(enteredText);
  };
  return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="text" onClick={removeHandler}>Todo Text</label>
    <input type="text" id='text' ref={todoTextInputRef} />
    <button>Add Todo</button>
  </form>
}

export default NewTodo