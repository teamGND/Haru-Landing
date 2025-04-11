// components/Section.tsx
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => { 
  return (
    <footer className={styles.footer}>
        <div className={styles['footer-slogan']}>
          <div className={styles['footer-text']}>
            <p>Digital Transformation</p>
            <p>for Equal Education Opportunities</p>
            <p>for Every Child</p>
          </div>
          <img src="/images/logo-white.png" alt="Logo" className={styles['footer-logo']} />
        </div>
        <div className={styles['footer-links']}>
          <div className={styles['footer-column']}>
            <h4>Company</h4>
            <a href="privacy">Privacy Policy</a>
            <a href="terms">Terms of Service</a>
          </div>
          {/* <div className={styles['footer-column']}>
            <h4>Product</h4>
            <a href="#">Delete Account</a>
          </div> */}
          <div className={styles['footer-column']}>
            <h4>Support</h4>
            <a href="mailto:haru_admin@haruhangeul.com">Email</a>
          </div>
          <div className={styles['footer-column']}>
            <h4>Download</h4>
            <a href="https://apps.apple.com/in/app/%ED%95%98%EB%A3%A8-%ED%95%9C%EA%B8%80/id6738025044?uo=2">App Store</a>
          </div>
        </div>
    </footer>
    );
};

export default Footer;
