import styles from "./AboutPage.module.css";

import { MY_SKILLS } from "../store/store";

const AboutPage = () => {
  return (
    <section className={styles["aboutPage-wrapper"]}>
      <div className={styles["about-me"]}>
        <h1>ABOUT ME</h1>
        <p>
          Here you will find more information about me, what I do and my current
          skills mostly in terms of programming and technology
        </p>
      </div>
      <div className={styles["below-wrapper"]}>
        <div className={styles["bio-info"]}>
          <h4>Get to know me!</h4>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin
            where I post useful content related to Web Development and
            Programming
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
        <div className={styles["my-skills"]}>
          <h4>My Skills</h4>
          <div className={styles["skills-wrapper"]}>
            {MY_SKILLS.map((skill) => (
              <span key={skill} className={styles["skill-item"]}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
