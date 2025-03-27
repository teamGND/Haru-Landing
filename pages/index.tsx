// pages/index.tsx
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Haru Hangeul</title>
        <meta name="description" content="Learn Korean with Haru Hangeul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar />/ */}

      <main>


        {/* Hero Section */}
        <Section id="hero" title="" backgroundColor="#88DCFD">
        {/* Upper Bar */}
          <div className={styles.upperBar}>
            <img src="/images/logo-colored.png" alt="Haru Hangeul"/>
            <div className={styles.spacer}></div>
            <div className={styles.buttonGroup}>
              <div className={styles.donateButton}>DONATE</div>
              <div className={styles.downloadButton}>DOWNLOAD</div>
              <div className={styles.languageButton}>KOREAN</div>
            </div>
          </div>
          <div className={styles.hero}>
            <h1>하루한글</h1>
            <p>10대부터 성인까지 스스로 한국어를 즐길 재밌게</p>
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
          </div>
        </Section>

        {/* Features Section */}
        <Section id="features" title="하루한글 앱서비스 소개" backgroundColor="#DCF4FF">
          <div className={styles.features}>
            <div>고객 네 가지로 4진형 학습</div>
            <div>한국의 교육 철학</div>
            <div>나에게 맞는 학습 피드백으로</div>
            <div>게임화된 재미있게</div>
          </div>
        </Section>

        {/* Levels Section */}
        <Section id="levels" title="등급별 학습" backgroundColor="#e6f0fa">
          <div className={styles.levels}>
            <div>Alphabet - 30 words</div>
            <div>Beginner - 400 words</div>
            <div>Elementary - 800 words</div>
            <div>Intermediate Low - 1,300 words</div>
            <div>Intermediate High - 2,000 words</div>
            <div>Advanced - 3,000 words</div>
          </div>
        </Section>

        {/* Reviews Section */}
        <Section id="reviews" title="사용자 후기" backgroundColor="#FEE6F5">
          <div className={styles.reviews}>
            <div>언어 더블렛이 한국어 과사 - "하루한글로 한국어 공부를 시작했어요."</div>
            <div>104 라이어 여학생 - "하루한글 덕분에 한국어 실력이 많이 늘었어요."</div>
            <div>초등 6학년 안유 - "하루한글은 정말 재미있어요."</div>
            <div>20대 000학부 - "하루한글로 한국어 공부를 시작했어요."</div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section id="faq" title="자주 묻는 질문" backgroundColor="#ffe6e6">
          <div className={styles.faq}>
            <div>하루한글은 어떻게 시작하나요?</div>
            <div>하루한글은 어떤 연령대가 사용하나요?</div>
          </div>
        </Section>
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