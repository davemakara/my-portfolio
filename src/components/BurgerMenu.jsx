import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  return (
    <div className={styles["burger-menu"]}>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/projects">PROJECTS</a>
        </li>
        <li>
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
