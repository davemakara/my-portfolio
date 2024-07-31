import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

import SocialBox from "../components/SocialBox";

const Homepage = ({ homeRef }) => {
  return (
    <section ref={homeRef} className={styles["main-homepage"]}>
      <SocialBox />
      <div className={styles["main-div"]}>
        <h1>HELLO, DAVID IS HERE.</h1>

        <p>
          A Frontend focused Web Developer - building Websites and Web
          Applications that leads to the success of the overall product
        </p>
        <button className={styles.jumpButton}>
          <Link to="/projects" className={styles.btnLink}>
            PROJECTS
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Homepage;
