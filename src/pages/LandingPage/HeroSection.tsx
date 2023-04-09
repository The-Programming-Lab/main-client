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
        {/* <div className={styles.heroImageGradient} /> */}

        <img
          src="/LandingPage/hero_image.png"
          alt="hero_cover"
          className={styles.heroImage}
        />
        {/* <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a> */}
      </motion.div>

    </motion.div>
  </section>;
};

export default HeroSection;
