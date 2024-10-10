import { useState } from "react";
import AddToDo from "./AddToDo";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);

  const handleSubmit = (newToDo) => {
    setToDos([...toDos, newToDo]);
  };

  return (
    <>
      <AddToDo handleSubmit={handleSubmit} />
      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
