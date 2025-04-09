// components/Section.tsx
import { ReactNode } from 'react';
import styles from '../styles/Footer.module.css';
import StoreButton from './StoreButton';

const Footer: React.FC = () => { 
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <h3 className={styles['footer-title']}>Try Haru Hangeul for free.</h3>
        <div className={styles['download-buttons']}>
        <StoreButton downloadText='Download on the' storeText='App Store' imageUrl='images/app-store.png' linkUrl='' />
        <StoreButton downloadText='GET IT ON' storeText='Google Play' imageUrl='images/google-play.png' linkUrl='' />
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <div className={styles['footer-slogan']}>
          <p>Digital Transformation for Equal Education Opportunities for Every Child</p>
          <p className={styles['footer-logo']}>하루한글</p>
        </div>
        <div className={styles['footer-links']}>
          <div className={styles['footer-column']}>
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className={styles['footer-column']}>
            <h4>Product</h4>
            <a href="#">Delete Account</a>
          </div>
          <div className={styles['footer-column']}>
            <h4>Support</h4>
          </div>
          <div className={styles['footer-column']}>
            <h4>Download</h4>
          </div>
        </div>
      </div>
      </footer>
    );
};

export default Footer;
