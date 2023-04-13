
import Navbar from '../components/LandingPage/Navbar';
import AboutSection from '../pages/LandingPage/AboutSection';
import HeroSection from '../pages/LandingPage/HeroSection';
import styles from './index.module.scss';

export default function LandingPage() {
  return(
    <div className={styles.mainContainer}>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}