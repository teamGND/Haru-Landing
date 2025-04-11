import { useState } from 'react';
import styles from '../styles/TopBar.module.css';

const TopBar: React.FC = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const languages = ['Korean', 'English', 'Chinese (Simplified)', 'Vietnamese', 'Russian'];

  return (
    <div className={styles['top-bar']}>
    <img src="images/logo-colored.png" alt="Logo" className={styles.logo} />
    <div className={styles['top-bar-buttons']}>
      <a href='https://www.paypal.com/ncp/payment/SG466C5KKQQJW'>
        <button className={styles['donate-button']}>DONATE</button>
      </a>
      <div className={styles['language-selector']}>
        <button onClick={toggleLanguageMenu} className={styles['language-button']}>
          KOREAN ▼
        </button>
        {isLanguageMenuOpen && (
          <div className={styles['language-menu']}>
            {languages.map((language, index) => (
              <div key={index} className={styles['language-item']}>
                {language}
                {language === 'Korean' && <span className={styles.checkmark}>✔</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
  );
}

export default TopBar;