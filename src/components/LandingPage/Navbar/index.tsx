"use client";

import React, { useEffect, useState } from "react";

import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import styles from "./navbar.module.scss";
import { navVariants, hamburgerVariants } from "../../../utils/motion";
import { Link } from "react-scroll";
import MenuModal from "./MenuModal";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [prevScrollYProgress, setPrevScrollYProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const [menuModalOpen, setMenuOpenModal] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > prevScrollYProgress) {
      setHidden(true);
    }
    if (latest < prevScrollYProgress) {
      setHidden(false);
    }
    setPrevScrollYProgress(latest);
  });

  const handleHamMenuClick = () => {
    setMenuOpenModal((prev) => {
      return !prev;
    });
    setHidden((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <motion.div
        variants={hamburgerVariants}
        initial="hidden"
        animate={menuModalOpen ? "show" : "hidden"}
      >
        <MenuModal show={menuModalOpen} onClose={handleHamMenuClick} />
      </motion.div>

      <motion.nav
        variants={navVariants}
        initial="show"
        animate={hidden ? "hidden" : "show"}
        className={styles.navContainer}
      >
        <div className={styles.gradient} />
        <div className={styles.navInnerContainer}>
          <div className={styles.logoMobile}>
            <h1>TPL</h1>
          </div>

          <div className={styles.logoDesktop}>
            <h1>The Programming Lab</h1>
          </div>

          <div className={styles.navContent}>
            <div className={styles.navLinks}>
              <Link to="homeSection" smooth={true} duration={500}>
                Home
              </Link>

              <Link to="testSection" smooth={true} duration={500}>
                Features
              </Link>

              <Link to="testSection" smooth={true} duration={500}>
                Projects
              </Link>

              <Link to="testSection" smooth={true} duration={500}>
                About
              </Link>
            </div>

            <button className={styles.actionButton}>Get Started</button>
            <img
              src="/menu.svg"
              alt="menu"
              className={styles.hambergerMenu}
              onClick={handleHamMenuClick}
            />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
