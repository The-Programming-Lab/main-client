"use client";

import React from "react";
import styles from "./FeaturesSection.module.scss";
import { motion } from "framer-motion";
import {
  textVariant,
  staggerContainer,
  slideDown,
  slideIn,
} from "@/src/utils/motion";

const FeaturesSection = () => {
  return (
    <section id="solutionsSection" className={styles.sectionContainer}>
      <motion.h1
        variants={textVariant(0.5)}
        className={styles.heroHeading}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.25,
        }}
      >
        FEATURES
      </motion.h1>

      <div>
        <motion.div
          variants={staggerContainer(0, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.5,
          }}
          className={styles.featureSummaryContainer}
        >
          <motion.div variants={slideDown} className={styles.sideBar}>
            <div className={styles.learnIcon}>
              <img src="/LandingPage/learn_icon.png" alt="learn_icon" />
            </div>

            <div className={`${styles.sideLine} ${styles.orange}`} />
          </motion.div>
          <motion.div variants={slideDown} className={styles.featureContent}>
            <div className={styles.featureHeading}>
              <span>Learn</span>
            </div>
            <div className={styles.featureDescription}>
              <p>
                <span className={`${styles.HLContent} ${styles.orange}`}>
                  Empower your skills with the latest technologies.
                </span>
                Our platform accelerates your learning through collaboration and
                innovation.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.25,
          }}
          className={styles.featureDetailsContainer}
        >
          <div className={styles.learnDetail}>
            <motion.img
              className={`${styles.featureImage} ${styles.orange}`}
              src="/LandingPage/learning1.png"
              variants={slideIn("right", "tween", 0.2, 1)}
            />

            <motion.div
              className={styles.detailText}
              variants={slideIn("left", "tween", 0.2, 1)}
            >
              <div className={styles.detail}>
                <div className={styles.detailNumber}>1</div>

                <p>
                  <span className={`${styles.HLContent} ${styles.orange}`}>
                    Explore projects
                  </span>{" "}
                  from other users in the community and gain new ideas and
                  perspectives.
                </p>
              </div>

              <div className={styles.detail}>
                <div className={styles.detailNumber}>2</div>

                <p>
                  Get{" "}
                  <span className={`${styles.HLContent} ${styles.orange}`}>
                    access to project documentation
                  </span>{" "}
                  and learn from the techniques and tools used by other
                  developers.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.7,
          }}
          className={`${styles.featureSummaryContainer}`}
        >
          <motion.div
            variants={slideDown}
            className={`${styles.featureContent}`}
          >
            <div className={`${styles.featureHeading} ${styles.right}`}>
              <span>Collaborate</span>
            </div>
            <div className={`${styles.featureDescription} ${styles.right}`}>
              <p>
                <span className={`${styles.HLContent} ${styles.green}`}>
                  Supercharge collaboration with TPL.
                </span>
                Our platform enables you to find and connect with like-minded
                problem solvers.
              </p>
            </div>
          </motion.div>

          <motion.div variants={slideDown} className={styles.sideBar}>
            <div className={styles.learnIcon}>
              <img
                src="/LandingPage/collaboration_icon.png"
                alt="collaboration_icon"
              />
            </div>

            <div className={`${styles.sideLine} ${styles.green}`} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.7,
          }}
          className={styles.featureDetailsContainer}
        >
          <div className={styles.learnDetail}>
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className={styles.detailText}
            >
              <div className={styles.detail}>
                <div className={styles.detailNumber}>1</div>

                <p>
                  <span className={`${styles.HLContent} ${styles.green}`}>
                    Connect with other programmers
                  </span>{" "}
                  who share your interests and passions.
                </p>
              </div>

              <div className={styles.detail}>
                <div className={styles.detailNumber}>2</div>

                <p>
                  <span className={`${styles.HLContent} ${styles.green}`}>
                    Find the perfect collaborators
                  </span>{" "}
                  for your projects. Discover other programmers based on their
                  previous projects.
                </p>
              </div>
            </motion.div>
            <motion.img
              className={`${styles.featureImage} ${styles.green}`}
              src="/LandingPage/collaborate_hero.png"
              variants={slideIn("left", "tween", 0.2, 1)}
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.5,
          }}
          className={styles.featureSummaryContainer}
        >
          <motion.div variants={slideDown} className={styles.sideBar}>
            <div className={styles.learnIcon}>
              <img src="/LandingPage/showcase_icon.png" alt="showcase_icon" />
            </div>

            <div className={`${styles.sideLine} ${styles.blue}`} />
          </motion.div>
          <motion.div variants={slideDown} className={styles.featureContent}>
            <div className={styles.featureHeading}>
              <span>Showcase</span>
            </div>
            <div className={styles.featureDescription}>
              <p>
                <span className={`${styles.HLContent} ${styles.blue}`}>
                  Launch and showcase your creations.
                </span>
                <br />
                Our platform provides you with the tools to share your projects
                with ease.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.25,
          }}
          className={styles.featureDetailsContainer}
        >
          <div className={styles.learnDetail}>
            <motion.img
              className={`${styles.featureImage} ${styles.blue}`}
              src="/LandingPage/showcase_hero.png"
              variants={slideIn("right", "tween", 0.2, 1)}
            />

            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              className={styles.detailText}
            >
              <div className={styles.detail}>
                <div className={styles.detailNumber}>1</div>

                <p>
                  Quickly and easily{" "}
                  <span className={`${styles.HLContent} ${styles.blue}`}>
                    deploy your projects
                  </span>{" "}
                  to our secure and reliable cloud infrastructure.
                </p>
              </div>

              <div className={styles.detail}>
                <div className={styles.detailNumber}>2</div>

                <p>
                  <span className={`${styles.HLContent} ${styles.blue}`}>
                    Customize your portfolio
                  </span>{" "}
                  and showcase your projects to the world.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
