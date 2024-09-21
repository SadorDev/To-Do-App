import { useEffect, useState } from "react";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import styles from "../components/Background.module.css";
import "../styles/Base.module.css";

const Background = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode
      ? "hsl(235, 21%, 11%)"
      : "hsl(0, 0%, 98%)";
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <main className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
        <header className={styles.title}>
          <h1> TODO </h1>
          <button type="button" onClick={handleDarkMode}>
            <img src={darkMode ? sun : moon}></img>
          </button>
        </header>
      </main>
    </>
  );
};

export default Background;
