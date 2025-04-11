// pages/home.tsx
import React, { useState } from 'react';
import styles from '../styles/HomePage.module.css';
import StoreButton from '../components/StoreButton';
import TopBar from '../components/TopBar';

const HomePage = () => {

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
        <img
            src="images/logo.png"
            alt="Logo"
            className={styles['center-logo']}
          />
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
          <StoreButton downloadText='Download on the' storeText='App Store' imageUrl='images/app-store.png' linkUrl='https://apps.apple.com/in/app/%ED%95%98%EB%A3%A8-%ED%95%9C%EA%B8%80/id6738025044?uo=2' />
          <StoreButton downloadText='GET IT ON' storeText='Google Play' imageUrl='images/google-play.png' linkUrl='' />
        </div>
      </div>
         {/* Top Bar */}
     <TopBar />

    </section>
  );
};

export default HomePage;  