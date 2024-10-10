  import { useState } from "react";
  import styles from "../components/AddToDo.module.css";

  const AddToDo = ({ handleSubmit }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const submitNewToDo = (e) => {
      e.preventDefault()
      if (inputValue.trim()) {
        handleSubmit(inputValue)
        setInputValue("")
      }
    }

    return (
      <>
        <form className={styles.form} onSubmit={submitNewToDo}>
          <label htmlFor="add-to-do">Enter a new task</label>
          <input
            id="todo"
            className={styles.input}
            type="text"
            placeholder="Create a new todo..."
            name="todo"
            onChange={handleInputChange}
          />
          <button></button>
        </form>
      </>
    );
  };

  export default AddToDo;
