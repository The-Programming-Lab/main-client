'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';
import styles from './CustomTexts.module.scss';
interface TypingTextProps {
  title: string;
  textStyles?: string;
}

export const TypingText = ({ title, textStyles }:TypingTextProps) => (
  <motion.p
    variants={textContainer}
    className={styles.typingTextContainer}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span className={index===0?styles.highlightLetter:''} variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);