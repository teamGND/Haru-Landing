// pages/home.tsx
import React, { useState } from 'react';
import styles from '../styles/HomePage.module.css';
import MenuBar from '../components/MenuBar';
import StoreButton from '../components/StoreButton';

const HomePage = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const languages = ['Korean', 'English', 'Chinese (Simplified)', 'Vietnamese', 'Russian'];

  return (
    <div className={styles['home-page']}>
      <div className={styles['top-bar']}>
        <img src="images/logo-colored.png" alt="Logo" className={styles.logo} />
        <div className={styles['top-bar-buttons']}>
          <button className={styles['donate-button']}>DONATE</button>
          <button className={styles['download-button']}>DOWNLOAD</button>
          <div className={styles['language-selector']}>
            <button onClick={toggleLanguageMenu} className={styles['language-button']}>
              KOREAN ▼
            </button>
            {isLanguageMenuOpen && (
              <div className={styles['language-menu']}>
                {languages.map((language, index) => (
                  <div key={index} className={styles['language-item']}>
                    {language}
                    {language === 'English' && <span className={styles.checkmark}>✔</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Background Character Images */}
      <img
        src="images/character-pink.png"
        alt="Pink Character"
        className={`${styles.character} ${styles['character-pink']}`}
      />
      <img
        src="images/character-red.png"
        alt="Red Character"
        className={`${styles.character} ${styles['character-red']}`}
      />
      <img
        src="images/character-yellow.png"
        alt="Yellow Character"
        className={`${styles.character} ${styles['character-yellow']}`}
      />
      <img
        src="images/character-black.png"
        alt="Black Character"
        className={`${styles.character} ${styles['character-black']}`}
      />

      {/* Centered Content */}
      <div className={styles['center-content']}>
        <h1 className={styles.title}>
          <span className={styles.highlight}>10대</span>부터 성인까지{' '}
          <span className={styles.highlight}>스스로</span> <br />
          <span className={styles.highlight}>한국어</span>를 쉽고 재밌게
        </h1>
        <p className={styles.subtitle}>
          ENGLISH <span className={styles.divider}>|</span> 汉语{' '}
          <span className={styles.divider}>|</span> Tiếng Việt{' '}
          <span className={styles.divider}>|</span> Русский
        </p>
        <div className={styles['store-buttons']}>
          <StoreButton downloadText='Download on the' storeText='App Store' imageUrl='images/app-store.png' linkUrl='' />
          <StoreButton downloadText='GET IT ON' storeText='Google Play' imageUrl='images/google-play.png' linkUrl='' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;