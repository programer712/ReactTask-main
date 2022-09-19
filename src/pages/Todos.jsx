import React, { useState, useEffect } from "react"
import TodoList from "../components/TodoList/TodoList"
import TodoForm from "../components/TodoForm/TodoForm"

import config from "../config"
import {
  create,
  deletes,
  getAllItems,
  update,
} from "../api/apiServise"
import Message from "../components/UI/Message/Message"
import MyModal from "../components/UI/Modal/MyModal"
const URL = `${config.url}/todos`

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)
  const [modal, setModal] = useState(false)
  const [valueForUpdate, setValueForUpdate] = useState({})

  const getAllTodos = async () => {
    const data = await getAllItems(URL)
    setTodos(data)
  }

  useEffect(() => {
    getAllTodos()
  }, [])
  /**create new new task in db */
  const createNewTodo = async (todo) => {
    const response = await create(URL, todo)
    if (response) {
      setMessage("Todo created successfully.")
      setError(false)
    } else {
      setMessage("Error: Todo not created.")
      setError(true)
    }
  }

  const addTask = (inputValue) => {
    const todo = {
      id: Date.now(),
      text: inputValue,
      complete: false,
      date: Date.now(),
    }
    setTodos((prevTodo) => {
      return [...prevTodo, todo]
    })
    createNewTodo(todo)
  }

  const handleToggle = (id) => {
    const completed = todos.map((el) => {
      return el.id === Number(id)
        ? { ...el, complete: !el.complete }
        : { ...el }
    })

    setTodos(completed)
    const o = todos.slice(todos.findIndex((i) => i.id === id, 1))

    const updatedTodo = {
      text: o[0].text,
      date: o[0].date,
      complete: !o[0].complete,
    }

    update(URL, id, updatedTodo)
  }
  /**deleting todo item */
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((el) => el.id !== Number(id)))
    deletes(URL, id)
  }
  /** updating todo item */
  const handleEditTodo = (id) => {
    const value = todos[todos.findIndex((i) => i.id === id)]
    setValueForUpdate(value)
    setModal(true)
  }
  const handleUpdate = (value) => {
    const todo = {
      text: value,
      complete: false,
      date: Date.now(),
    }
    setTodos(
      todos.map((el) => {
        return el.id === Number(valueForUpdate.id)
          ? { ...el, ...todo }
          : { ...el }
      })
    )
    update(URL, valueForUpdate.id, todo)
    setModal(false)
  }

  return (
    <div>
      {!error ? (
        message ? (
          <Message className="hide5sc" type>
            {message}
          </Message>
        ) : null
      ) : message ? (
        <Message className="hide5sc">{message}</Message>
      ) : null}

      <MyModal visible={modal} setVisible={setModal}>
        <TodoForm
          handleItem={handleUpdate}
          typeButton="edit"
          valueForUpdate={valueForUpdate}
        ></TodoForm>
      </MyModal>
      <TodoList
        todosData={todos}
        handleToggle={handleToggle}
        handleDelete={handleDeleteTodo}
        handleEdit={handleEditTodo}
      ></TodoList>
      <TodoForm handleItem={addTask} typeButton="create" valueForUpdate="" />
    </div>
  )
}

export default Todos
