
import Navbar from '../components/LandingPage/Navbar';
import styles from './index.module.scss';

export default function LandingPage() {
  return(
    <div className={styles.mainContainer}>
      <Navbar />
      <section id="homeSection">
      </section>
      <section className={styles.testSection} id="testSection">
        Test Section
      </section>
    </div>
  );
}