import { NavLink } from "react-router-dom";

import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ onButtonClick }) => {
  return (
    <div className={styles["burger-menu"]}>
      <ul>
        <li>
          <NavLink to="/" onClick={onButtonClick}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={onButtonClick}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={onButtonClick}>
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={onButtonClick}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
