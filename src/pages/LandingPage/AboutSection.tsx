"use client";

import { AnimatePresence, motion } from "framer-motion";
import { TypingText } from "../../components/CustomTexts";

import styles from "./AboutSection.module.scss";
import { fadeIn, staggerContainer, blinkAnimation } from "../../utils/motion";

const AboutSection = () => (
  <section className={styles.sectionContainer} id="aboutSection">
    <div className={styles.gradient} />

    <div className={styles.sectionContainerFlex}>
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
            <span className={styles.boldText}>
              open-source learning platform
            </span>{" "}
            for both beginner and experienced programmers.
          </p>

          <p>
            Our platform enables{" "}
            <span className={styles.boldText}>collaboration</span> on projects,
            provides access to a diverse range of projects created by others,
            and allows you to <span className={styles.boldText}>deploy</span>{" "}
            and <span className={styles.boldText}>showcase</span> your own
            projects using our tools.
          </p>

          <motion.button
            className={styles.joinButton}
            variants={fadeIn("up", "tween", 0.3, 1)}
          >
            Join Now
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.img
          src="/arrow-down.svg"
          alt="arrow down"
          className={styles.arrowDown}
          animate={blinkAnimation}
        />
      </motion.div>

    </div>
  </section>
);

export default AboutSection;
