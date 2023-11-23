import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className={styles["main-navigation"]}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={`${(isActive) => (isActive ? styles.active : "")} ${
              styles.navLink
            } `}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={`${styles.navLink} ${({ isActive }) =>
              isActive ? styles.active : ""}`}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={`${styles.navLink} ${(isActive) =>
              isActive ? styles.active : ""}`}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={`${styles.navLink} ${({ isActive }) =>
              isActive ? styles.active : ""}`}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
