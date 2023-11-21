import profilePic from "../assets/profile.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <span>
        <div className={styles.imgWrapper}>
          <img src={profilePic} alt="profile picture" />
        </div>
        <p>DAVID MAKAROV</p>
      </span>
      <nav>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>PROJECTS</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
