import React from "react";
import styles from "../Todo/Todo.module.css";

const Todo = ({ todo, handleToggle ,handleDelete, handleEdit}) => {
  const handleClick = (event) => {
    handleToggle(event.currentTarget.id);
  }
  const deleteTodo = () =>{
    handleDelete(todo.id);
  }
  const editTodo = () =>{
    handleEdit(todo.id);
  }
  return (
    <li  className={styles.itemTodo}>
      <input id={todo.id} type="checkbox" onChange={handleClick} value={todo.complete} checked={todo.complete}/>
      <span className={styles.itemText}>{todo.text}</span>
      <div className={styles.itemButtons}>
        <button onClick={editTodo} className={styles.itemBtn}><i className="fa-solid fa-pen-to-square"></i></button>
        <button onClick={deleteTodo} className={styles.itemBtn}><i className="fa-solid fa-trash-can"></i></button>
      </div>
      
    </li>
  )
}
export default Todo;
  


