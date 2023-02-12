const TodoItem:React.FC<{children:string;key:string;text:string}>= (props) => {
  return <li>
    {props.text}
  </li>
}

export default TodoItem;