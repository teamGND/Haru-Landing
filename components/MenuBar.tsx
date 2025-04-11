// components/MenuBar.tsx
import { useState, useEffect } from 'react';
import styles from '../styles/MenuBar.module.css';

const MenuBar: React.FC = () => {
  const [isFolded, setIsFolded] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsFolded(!isFolded);
  };

  return (
    <div
      className={`${styles['menu-bar']} ${isFolded ? styles.folded : styles.unfolded} ${
        isScrolled ? styles.scrolled : ''
      }`}
    >
      {!isFolded && (
        <div className={styles['menu-items']}>
          <a href="#home" className={styles['menu-item']}>하루 한글</a>
          <a href="#intro"className={styles['menu-item']} >Info</a>
          <a href="#levels"className={styles['menu-item']}>Level</a>
          <a href="#reviews"className={styles['menu-item']}>Reviews</a>
          <a href="#faq"className={styles['menu-item']}>FAQ</a>
          <a href="#contact"className={styles['menu-item']}>Contact</a>
        </div>
      )}
      {/* Blue character icon (always visible, clickable to toggle) */}
      <img
        src="images/menu-icon.png"
        alt="Toggle Menu"
        className={styles['toggle-icon']}
        onClick={toggleMenu}
      />
    </div>
  );
};

export default MenuBar;