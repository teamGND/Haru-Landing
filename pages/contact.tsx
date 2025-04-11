// components/FAQPage.tsx
import React, { useState } from 'react';
import styles from '../styles/ContactPage.module.css';
import StoreButton from '../components/StoreButton';

const ContactPage: React.FC = () => {


  return (
    <section id="contact" className={styles['contact-page']}>
     <div className={styles['contact']}>
        <h3 className={styles['footer-title']}>Try Haru Hangeul for free.</h3>
        <div className={styles['download-buttons']}>
          <StoreButton downloadText='Download on the' storeText='App Store' imageUrl='images/app-store.png' linkUrl='https://apps.apple.com/in/app/%ED%95%98%EB%A3%A8-%ED%95%9C%EA%B8%80/id6738025044?uo=2' />
          <StoreButton downloadText='GET IT ON' storeText='Google Play' imageUrl='images/google-play.png' linkUrl='' />
        </div>
      </div>

    </section>
  );
};

export default ContactPage;