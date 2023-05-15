
import Navbar from '../components/LandingPage/Navbar';
import AboutSection from '../components/LandingPage/AboutSection';
import FeaturesSection from '../components/LandingPage/FeaturesSection';
import HeroSection from '../components/LandingPage/HeroSection';
import styles from './index.module.scss';

export default function LandingPage() {
  return(
    <div className={styles.mainContainer}>
      <Navbar />
      <HeroSection />
      <div className={styles.sectionContainer}>
        <AboutSection />
        <div className={styles.gradient1} />
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.gradient4} />
        <FeaturesSection/>
        <div className={styles.gradient5} />
        <div className={styles.gradient6} />
        <div className={styles.gradient7} />
      </div>
      
    </div>
  );
}