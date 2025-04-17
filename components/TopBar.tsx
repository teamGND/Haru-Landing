import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import styles from '../styles/TopBar.module.css';
import logo from '../public/images/logo-colored.png'; // Adjust the path as necessary

const TopBar: React.FC = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { i18n } = useTranslation(); // Get i18n instance

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const languages = [
    { name: 'Korean', code: 'ko' },
    { name: 'English', code: 'en' },
    { name: 'Chinese (Simplified)', code: 'zh' },
    { name: 'Vietnamese', code: 'vi' },
    { name: 'Russian', code: 'ru' },
  ];

  const handleLanguageChange = (langCode: string) => {
    if (i18n.changeLanguage) {
      i18n.changeLanguage(langCode); // Change language
      console.log('Language changed to:', langCode); // Debug log
    } else {
      console.error('i18n.changeLanguage is not available');
    }
    setIsLanguageMenuOpen(false); // Close menu after selection
  };

  // Get current language name for display
  const currentLanguage = languages.find(lang => lang.code === i18n.language)?.name || 'Korean';

  return (
    <div className={styles['top-bar']}> 
      <img src={logo.src} alt="Logo" className={styles['logo']} />
      <div className={styles['top-bar-buttons']}>
        <a href='https://www.paypal.com/ncp/payment/SG466C5KKQQJW'>
          <button className={styles['donate-button']}>DONATE</button>
        </a>
        <div className={styles['language-selector']}>
          <button onClick={toggleLanguageMenu} className={styles['language-button']}>
            {currentLanguage.toUpperCase()} ▼
          </button>
          {isLanguageMenuOpen && (
            <div className={styles['language-menu']}>
              {languages.map((language) => (
                <div
                  key={language.code}
                  className={styles['language-item']}
                  onClick={() => handleLanguageChange(language.code)}
                >
                  {language.name}
                  {language.code === i18n.language && <span className={styles.checkmark}>✔</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;