
import Navbar from '../components/LandingPage/Navbar';
import HeroSection from '../pages/LandingPage/HeroSection';
import styles from './index.module.scss';

export default function LandingPage() {
  return(
    <div className={styles.mainContainer}>
      <Navbar />
      <HeroSection />
      <section className={styles.testSection} id="testSection">
        Test Section
      </section>
    </div>
  );
}