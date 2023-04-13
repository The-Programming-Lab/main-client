"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.scss";
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";
const HeroSection = () => {
  return <section id="heroSection" className={styles.heroContainer}>
    <motion.div
      variants={staggerContainer(0,0)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once:false,
        amount:0.25
      }}
      className={styles.staggerContainer}
    >

      <div className={styles.heroText}>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          COLLABORATE
        </motion.h1>
        <motion.h1 variants={textVariant(1.2)} className={styles.heroHeading}>
          INNOVATE
        </motion.h1>
        <motion.h1 variants={textVariant(1.3)} className={styles.heroHeading}>
          LEARN
        </motion.h1>
        
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className={styles.heroImageContainer}
      >
        <div className={styles.heroGradientWrapper}>
          <div className={styles.heroImageGradient} />
        </div>

        <img
          src="/LandingPage/hero_image.png"
          alt="hero_cover"
          className={styles.heroImage}
        />
      </motion.div>

    </motion.div>
  </section>;
};

export default HeroSection;
