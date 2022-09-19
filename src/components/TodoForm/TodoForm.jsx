import React, { useState } from "react"
import styles from "./TodoForm.module.css"

const TodoForm = ({ handleItem, typeButton, valueForUpdate }) => {
  const [value, setValue] = useState("")

  const handleChange = (event) => {
    setValue(event.currentTarget.value)
  }

  const handleSybmit = (event) => {
    event.preventDefault()

    if (value !== "") {
      handleItem(value)
      setValue("")
    }
  }
  const handleChangeInp = () => {
    setValue(valueForUpdate.text)
  }

  return (
    <form className={styles.formTodo} onSubmit={handleSybmit}>
      <div className={styles.formField}>
        <label htmlFor="input" className={styles.formLabel}>
          Item
        </label>
        {typeButton !== "edit" ? (
          <input
            id="input"
            onChange={handleChange}
            value={value}
            className={styles.formInput}
            type="text"
          />
        ) : (
          <input
            id="input"
            onClick={handleChangeInp}
            onChange={handleChange}
            value={value}
            className={styles.formInput}
            type="text"
            placeholder={valueForUpdate.text}
          />
        )}
      </div>
      <div className={styles.formField}>
        {typeButton === "create" ? (
          <button className={styles.btnForm}>Add</button>
        ) : (
          <button className={styles.btnForm}>Save</button>
        )}
      </div>
    </form>
  )
}
export default TodoForm
