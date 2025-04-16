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
import dynamic from 'next/dynamic';

// Lazy-load heavy components
const ReviewsPageDynamic = dynamic(() => import('./reviews'), { ssr: false });
const FAQPageDynamic = dynamic(() => import('./faq'), { ssr: false });

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>하루 한글 - Learn Korean with Haru Hangeul</title>
        <meta name="description" content="Learn Korean with Haru Hangeul! Master the language with our expert-designed app." />
        <meta name="keywords" content="learn Korean, Korean language app, Haru Hangeul, Korean learning" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="하루 한글 - Learn Korean with Haru Hangeul" />
        <meta property="og:description" content="Master Korean with Haru Hangeul, the ultimate language learning app." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.haruhangeul.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="naver-site-verification" content="d8768c8ff43c65f80190ff49aab3e93b784cbea6" />
        <meta name="google-site-verification" content="aa4RKAuGNHypg3RLf_N2VGiK_h7NL4t4Lmf02-JUvSw" />
        <link rel="canonical" href="https://www.haruhangeul.com" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalApplication',
            'name': 'Haru Hangeul',
            'description': 'Learn Korean with Haru Hangeul, an app developed by Korean experts.',
            'applicationCategory': 'Language Learning',
          })}
        </script>
      </Head>
      <header>
        <MenuBar />
      </header>
      <main>
        <section id="home">
          <HomePage />
        </section>
        <section id="intro">
          <IntroPage />
        </section>
        <section id="level">
          <LevelPage />
        </section>
        <section id="reviews">
          <ReviewsPageDynamic />
        </section>
        <section id="faq">
          <FAQPageDynamic />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;