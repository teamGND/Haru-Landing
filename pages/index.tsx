// pages/index.tsx
import Head from 'next/head';
import HomePage from './home';
import styles from '../styles/index.module.css';
import MenuBar from '../components/MenuBar';
import IntroPage from './intro';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Head Section */}
      <Head>
        <title>Haru Hangeul</title>
        <meta name="description" content="Learn Korean with Haru Hangeul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
√
      <main>

        <HomePage />
        <IntroPage />
        <MenuBar  />


      </main>

      <footer className={styles.footer}>
        <p>Try Haru Hangeul for free.</p>
        <div className={styles.storeButtons}>
          <a href="#" className={styles.storeButton}>
            <img src="/images/app-store.png" alt="App Store" />
            Download on the App Store
          </a>
          <a href="#" className={styles.storeButton}>
            <img src="/images/google-play.png" alt="Google Play" />
            Get it on Google Play
          </a>
        </div>
        <div className={styles.footerLinks}>
          <a href="#">Company</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;