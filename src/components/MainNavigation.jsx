import React from "react";
import styles from "./MainNavigation.module.css";

const MainNavigation = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
  const handleScroll = (ref, path) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, null, path);
  };

  return (
    <nav className={styles["main-navigation"]}>
      <ul>
        <li
          onClick={() => handleScroll(homeRef, "/")}
          className={styles.navLink}
        >
          HOME
        </li>
        <li
          onClick={() => handleScroll(aboutRef, "/about")}
          className={styles.navLink}
        >
          ABOUT
        </li>
        <li
          onClick={() => handleScroll(projectsRef, "/projects")}
          className={styles.navLink}
        >
          PROJECTS
        </li>
        <li
          onClick={() => handleScroll(contactRef, "/contact")}
          className={styles.navLink}
        >
          CONTACT
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
