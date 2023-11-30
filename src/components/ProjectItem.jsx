import { Link } from "react-router-dom";

import styles from "./ProjectItem.module.css";

const ProjectItem = ({ image, name, description, data }) => {
  const clickHandler = () => {
    console.log(data);
  };

  return (
    <section className={styles["project-item-wrapper"]}>
      <span>
        <img src={image} alt="project image" />
      </span>
      <div className={styles["project-item-description"]}>
        <h4>{name}</h4>
        <p>{description}</p>
        <button className={styles["project-button"]}>
          <Link
            to={data.id}
            className={styles["project-linkBtn"]}
            onClick={clickHandler}
          >
            CASE STUDY
          </Link>
        </button>
      </div>
    </section>
  );
};

export default ProjectItem;
