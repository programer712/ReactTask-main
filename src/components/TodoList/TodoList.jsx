import React from "react"
import Todo from "../Todo/Todo"
import styled from "styled-components"

const TodoList = ({ todosData , handleToggle, handleEdit, handleDelete}) => {
  return (
    <div className="main__wrapper">
      <TodoUl>
        {
          todosData.map(todo=>(
            <Todo key={todo.id} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} handleEdit={handleEdit}></Todo>
          ))
        }
      </TodoUl>
    </div>
  )
}
export default TodoList

const TodoUl = styled.ul`
  padding: 10px;
`
