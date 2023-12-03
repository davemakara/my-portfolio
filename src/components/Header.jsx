import profilePic from "../assets/profile2.jpg";
import styles from "./Header.module.css";
import MainNavigation from "./MainNavigation";
import menuIcon from "../assets/menu.svg";
import closeMenuIcon from "../assets/menu-close.svg";

const Header = ({ onButtonClick, displayMenu }) => {
  return (
    <header>
      <span className={styles.profileInfo}>
        <div className={styles.imgWrapper}>
          <img src={profilePic} alt="profile picture" />
        </div>
        <p>DAVID MAKAROV</p>
      </span>

      <img
        src={!displayMenu ? menuIcon : closeMenuIcon}
        alt="menu icon"
        className={styles["menu-icon"]}
        onClick={onButtonClick}
      />

      <MainNavigation />
    </header>
  );
};

export default Header;
