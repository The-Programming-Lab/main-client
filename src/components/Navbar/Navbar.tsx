'use client';
import styles from './Navbar.module.scss';
import Link from 'next/link'





const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.linkContainer}>
        
        <Link href="#about-section" legacyBehavior>
          <a>Home</a>
        </Link>
      
      
        <Link href="#services-section" legacyBehavior>
          <a>Features</a>
        </Link>
    
        <Link href="#contact-section" legacyBehavior>
          <a>Our Projects</a>
        </Link>
    
        <Link href="#contact-section" legacyBehavior>
          <a>About</a>
        </Link>
        
      </div>
      
      <div className={styles.buttonContainer}>
        <button className={styles.signupButton}>Sign Up</button>
        <button className={styles.loginButton}>Log In</button>
      </div>
      
    </nav>
  )
}

export default Navbar
