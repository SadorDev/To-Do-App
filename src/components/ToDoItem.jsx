import { useState } from "react";
import styles from "../components/ToDoItem.module.css";

const ToDoItem = () => {
  const [toDo, setToDo] = useState([]);
  return (
    <>
      <ul>
        <li>
          <label htmlFor="completed"></label>
          <input type="checkbox" id="completed" name="completed" />

          <label htmlFor="todo"></label>
          <input
            className={styles.todo}
            type="text"
            placeholder="Create a new todo..."
            id="todo"
            name="todo"
          />
        </li>
      </ul>
    </>
  );
};

export default ToDoItem;
