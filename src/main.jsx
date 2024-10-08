import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Background from "./components/Background.jsx";
import ToDoList from "./components/ToDoList.jsx";
// import Filter from "./components/Filter.jsx";
import "./styles/Base.module.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Background />
     <ToDoList />
     {/* <Filter />  */}
  </StrictMode>
);
