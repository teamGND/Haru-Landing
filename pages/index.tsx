// pages/index.tsx
import Head from 'next/head';
import HomePage from './home';
import styles from '../styles/index.module.css';
import MenuBar from '../components/MenuBar';
import IntroPage from './intro';
import LevelPage from './level';
import ReviewsPage from './reviews';
import FAQPage from './faq';
import Footer from '../components/Footer';
import ContactPage from './contact';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Head Section */}
      <Head>
        <title>Haru Hangeul</title>
        <meta name="description" content="Learn Korean with Haru Hangeul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
        <IntroPage />
        <LevelPage />
        <ReviewsPage />
        <FAQPage />
        <ContactPage />

        {/* Menu Bar */}
        <MenuBar  />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;