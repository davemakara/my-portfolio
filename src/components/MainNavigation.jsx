import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className={styles["main-navigation"]}>
      <ul>
        <li>
          <Link
            to="/"
            onClick={() => handleScroll(homeRef)}
            className={styles.navLink}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => handleScroll(aboutRef)}
            className={styles.navLink}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            onClick={() => handleScroll(projectsRef)}
            className={styles.navLink}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => handleScroll(contactRef)}
            className={styles.navLink}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
