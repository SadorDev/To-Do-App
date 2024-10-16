import { useState } from "react";
import AddToDo from "./AddToDo";
import styles from "../components/ToDoList.module.css";
import completed from "../assets/images/icon-check.svg";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);

  const handleSubmit = (newToDo) => {
    setToDos([...toDos, newToDo]);
  };

  return (
    <div className={styles.todoContainer}>
        <AddToDo handleSubmit={handleSubmit} />
      <ul>
        {toDos.map((todo, index) => (
          <li className={styles.list} key={index}>
            <img src={completed} alt="active check icon" />
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
