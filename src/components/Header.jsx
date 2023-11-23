import profilePic from "../assets/profile.jpg";
import styles from "./Header.module.css";
import MainNavigation from "./MainNavigation";
import menuIcon from "../assets/menu.svg";

const Header = ({ onButtonClick }) => {
  return (
    <header>
      <span className={styles.profileInfo}>
        <div className={styles.imgWrapper}>
          <img src={profilePic} alt="profile picture" />
        </div>
        <p>DAVID MAKAROV</p>
      </span>

      <img
        src={menuIcon}
        alt="menu icon"
        className={styles["menu-icon"]}
        onClick={onButtonClick}
      />

      <MainNavigation />
    </header>
  );
};

export default Header;
