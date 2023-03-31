import React from 'react'
import styles from './heroSection.module.scss'

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Welcome to my landing page!</h1>
        <p className={styles.subtitle}>
          This is an example of a landing page with a background image and an overlay.
          
        </p>
      </div>
    </div>
  )
}

export default HeroSection;