import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
               - Currently doing my Btech in Electronics and Communication Engineering (ECE) and have secured cpi 8.75/10(Till 6th sem)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Achievements</h3>
              <ul>
                <li> Secured AIR 12729 in IIT-JEE Advanced 2021 among 1.5 lakh students</li>
                <li> Secured 97.19 Percentile in IIT-JEE Mains 2021</li>
                <li> Secured descent ranks in Leetcode and Codechef Weekly Contests</li>
                </ul>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Extra-curriculars/Hobbies</h3>
              <p>
                I am very much interested in sports especially chess and cricket
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
