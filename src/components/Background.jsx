import styles from "../components/Background.module.css";
import "../styles/Base.module.css";
import moon from "../assets/images/icon-moon.svg";


const Background = () => {

  return (
    <>
      <main className={styles.container}>
          <header>
            <h1> TODO </h1>
            <button>
              <img src={moon}></img>
            </button>
          </header>
      </main>
    </>
  );
};

export default Background;
