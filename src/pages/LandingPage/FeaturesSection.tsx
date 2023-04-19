"use client";

import React from "react";
import styles from "./FeaturesSection.module.scss";
import { motion } from "framer-motion";
import { textVariant } from "@/src/utils/motion";

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

      <div className={styles.learnFeatureContainer}>
        <div className=""></div>
      </div>
    </section>
  );
};

export default FeaturesSection;
