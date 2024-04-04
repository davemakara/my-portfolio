import styles from "./Footer.module.css";

import linkedinLogo from "../assets/footer-linkedin-icon.png";
import githubLogo from "../assets/footer-github-icon.png";
import instaLogo from "../assets/footer-insta-icon.png";
import fbLogo from "../assets/footer-fb-icon.png";

const Footer = () => {
  console.log("Hello");
  return (
    <section className={styles["footer-section"]}>
      <div className={styles["footer-wrapper"]}>
        <div className={styles["footer-info"]}>
          <h4>DAVID MAKAROV</h4>
          <p>
            A Frontend focused Web Developer - building Websites and Web
            Applications that leads to the success of the overall product
          </p>
        </div>
        <div className={styles["footer-social"]}>
          <h4>SOCIAL</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/davidmakarov"
                target="_blank"
              >
                <img
                  src={linkedinLogo}
                  alt="linkedin logo"
                  className={styles["social-img"]}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/davemakara" target="_blank">
                <img
                  src={githubLogo}
                  alt="github logo"
                  className={styles["social-img"]}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/davemakaraa/" target="_blank">
                <img
                  src={instaLogo}
                  alt="instagram logo"
                  className={styles["social-img"]}
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/DavidMakarovv" target="_blank">
                <img
                  src={fbLogo}
                  alt="facebook logo"
                  className={`${styles["social-img"]} ${styles["social-img-fb"]}`}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>
        © Copyright 2023. Made by David Makarov
      </p>
    </section>
  );
};

export default Footer;
