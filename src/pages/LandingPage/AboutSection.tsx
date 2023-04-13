"use client";

import { motion } from "framer-motion";
import { TypingText } from "../../components/CustomTexts";

import styles from "./AboutSection.module.scss";
import { fadeIn, staggerContainer } from "../../utils/motion";

const AboutSection = () => (
  <section className={styles.sectionContainer} id="aboutSection">
    <div className={styles.gradient} />
    <motion.div
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={styles.sectionContentContainer}
    >
      <div className={styles.headerContainer}>
        <TypingText title="THE" textStyles="text-center" />
        <TypingText title="PROGRAMMING" textStyles="text-center" />
        <TypingText title="LAB" textStyles="text-center" />
      </div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className={styles.descriptionContainer}
      >
        <p>
          Welcome to the Programming Lab, an{" "}
          <span className={styles.boldText}>open-source learning platform</span>{" "}
          for both beginner and experienced programmers.
        </p>

        <p>
          Our platform enables{" "}
          <span className={styles.boldText}>collaboration</span> on projects,
          provides access to a diverse range of projects created by others, and
          allows you to <span className={styles.boldText}>deploy</span> and{" "}
          <span className={styles.boldText}>showcase</span> your own projects
          using our tools.
        </p>

        <p className={styles.boldText}>
          Join our community today and start exploring the world of programming!
        </p>
      </motion.div>

      <motion.button
        className={styles.joinButton}
        variants={fadeIn("up", "tween", 0.3, 1)}
      >
        Join Now
      </motion.button>
    </motion.div>
  </section>
);

export default AboutSection;
