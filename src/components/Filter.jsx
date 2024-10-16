import styles from "../components/Filter.module.css";
import { useState } from "react";

const Filter = () => {
  const [all, setAll] = useState();
  const [active, setActive] = useState();
  const [completed, setCompleted] = useState();

  return (
    <div className={styles.wrapper}>
      <p>
        <span> {}</span> items left
      </p>
      <button> All </button>
      <button> Active </button>
      <button> Completed </button>
    </div>
  );
};

export default Filter;
