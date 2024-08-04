import { NavLink } from "react-router-dom";

import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  return (
    <div className={styles["burger-menu"]}>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/projects">PROJECTS</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
