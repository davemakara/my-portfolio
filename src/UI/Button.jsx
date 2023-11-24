import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <button className={styles["button-UI"]}>
      <Link className={styles.btnLink}>PROJECTS</Link>
    </button>
  );
};

export default Button;
