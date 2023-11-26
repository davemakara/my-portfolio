import styles from "./SocialBox.module.css";

import socialLinkedin from "../assets/social-linkedin.svg";
import socialGithub from "../assets/social-github.svg";
import socialInstagram from "../assets/social-instagram.png";
import socialFacebook from "../assets/social-facebook.png";

const SocialBox = () => {
  return (
    <div className={styles["socialbox-wrapper"]}>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/davidmakarov/" target="_blank">
            <img
              src={socialLinkedin}
              alt="linkedin logo"
              className={styles["social-image"]}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/davemakara" target="_blank">
            <img
              src={socialGithub}
              alt="github logo"
              className={styles["social-image"]}
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/davemakaraa/" target="_blank">
            <img
              src={socialInstagram}
              alt="instagram logo"
              className={styles["social-image"]}
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/DavidMakarovv" target="_blank">
            <img
              src={socialFacebook}
              alt="linkedin logo"
              className={styles["social-image"]}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialBox;
