// components/MenuIcon.tsx
import styles from '../styles/Home.module.css';

interface MenuIconProps {
  onClick: () => void;
  isVisible: boolean;
}

const MenuIcon: React.FC<MenuIconProps> = ({ onClick, isVisible }) => {
  return (
    <div className={styles.menuIcon} onClick={onClick}>
      <img src="/images/menu-icon.png" alt="Menu Icon" />
    </div>
  );
};

export default MenuIcon;