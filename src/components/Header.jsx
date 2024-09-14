import styles from "../components/Header.module.css";
import bgDesktopLight from "../assets/images/bg-desktop-light.jpg";
import moon from "../assets/images/icon-moon.svg";

const Header = () => {
  return (
    <div className={styles.image_container}>
      <img src={bgDesktopLight} alt="Desktop-Light-Background" />
      <h1 className={styles.heading}> TO DO </h1>
      <button type="button" className={styles.btn}>
        <img src={moon} alt="moon-picture"></img>
      </button>
    </div>
  );
};

export default Header;
