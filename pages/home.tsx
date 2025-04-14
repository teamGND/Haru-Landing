import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/HomePage.module.css';
import StoreButton from '../components/StoreButton';
import TopBar from '../components/TopBar';

const HomePage = () => {
  const { t } = useTranslation();

  // Get the title array from translation with fallback
  const titlePartsRaw = t('home.title', { returnObjects: true });
  // Ensure titleParts is an array, fallback to empty array if invalid
  const titleParts = Array.isArray(titlePartsRaw) ? titlePartsRaw : [];

  // Process title parts to separate highlighted and normal text
  const renderTitle = () => {
    if (!titleParts.length) {
      // Fallback UI if translation fails
      return <span>{t('home.title_fallback', 'Learn Korean easily')}</span>;
    }
    return titleParts.map((part: string, index: number) => {
      if (typeof part === 'string' && part.startsWith('*')) {
        // Remove '*' and highlight the text
        const text = part.slice(1);
        return (
          <span key={index} className={styles.highlight}>
            {text}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section id="home" className={styles['home-page']}>
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
        <img src="images/logo.png" alt="Logo" className={styles['center-logo']} />
        <h1 className={styles.title}>{renderTitle()}</h1>
        <p className={styles.subtitle}>
          {t('en')} <span className={styles.divider}>|</span> {t('zh')}{' '}
          <span className={styles.divider}>|</span> {t('vi')}{' '}
          <span className={styles.divider}>|</span> {t('ru')}
        </p>
        <div className={styles['store-buttons']}>
          <StoreButton
            downloadText={t('store.apple.download')}
            storeText={t('store.apple.name')}
            imageUrl="images/app-store.png"
            linkUrl="https://apps.apple.com/in/app/%ED%95%98%EB%A3%A8-%ED%95%9C%EA%B8%80/id6738025044?uo=2"
          />
          <StoreButton
            downloadText={t('store.google.download')}
            storeText={t('store.google.name')}
            imageUrl="images/google-play.png"
            linkUrl=""
          />
        </div>
      </div>
      {/* Top Bar */}
      <TopBar />
    </section>
  );
};

export default HomePage;