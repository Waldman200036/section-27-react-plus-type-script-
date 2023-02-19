import classes from './NewTodo.module.css'
// import Todo from '../models/todo';
import { useRef } from "react";
// import Todos from './Todos';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void, onRemoveTodo: (id: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value!

    if (enteredText?.trim().length === 0) {
      // throw an error
      return;
    }
    props.onAddTodo(enteredText);
  };

  const removeHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //const todo =Todos.
    const enteredText = todoTextInputRef.current?.value!


    props.onRemoveTodo(enteredText);
  };
  return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="text" onClick={removeHandler}>Todo Text</label>
    <input type="text" id='text' ref={todoTextInputRef} />
    <button>Add Todo</button>
  </form>
}

export default NewTodo