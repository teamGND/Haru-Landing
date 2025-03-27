// components/Navbar.tsx
import { useState, useEffect } from 'react';
import MenuIcon from './MenuIcon';
import styles from '../styles/Home.module.css';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
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
    setIsVisible(!isVisible);
  };

  return (
    <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      {isVisible && (
        <div className={styles.menuItems}>
          <a href="#levels">Levels</a>
          <a href="#info">Info</a>
          <a href="#guide">Guide</a>
          <a href="#contact">Contact</a>
        </div>
      )}
      <MenuIcon onClick={toggleMenu} isVisible={isVisible} />
    </div>
  );
};

export default Navbar;