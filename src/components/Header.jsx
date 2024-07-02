import profilePic from "../assets/profile2.jpg";
import styles from "./Header.module.css";
import MainNavigation from "./MainNavigation";
import menuIcon from "../assets/menu.svg";
import closeMenuIcon from "../assets/menu-close.svg";
import burgerMenuIcon from "../assets/burgerMenu.jpg";
import xMenuIcon from "../assets/x-button.png";

const Header = ({
  onButtonClick,
  displayMenu,
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
}) => {
  return (
    <header>
      <span className={styles.profileInfo}>
        <div className={styles.imgWrapper}>
          <img src={profilePic} alt="profile picture" />
        </div>
        <p>DAVID MAKAROV</p>
      </span>

      <img
        src={!displayMenu ? burgerMenuIcon : xMenuIcon}
        alt="menu icon"
        className={styles["menu-icon"]}
        onClick={onButtonClick}
      />

      <MainNavigation
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </header>
  );
};

export default Header;
