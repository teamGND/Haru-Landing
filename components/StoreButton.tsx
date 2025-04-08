// components/StoreButton.tsx
import React from 'react';
import styles from '../styles/StoreButton.module.css';

interface StoreButtonProps {
  downloadText: string; // First line of text (e.g., "Download on the")
  storeText: string; // Second line of text (e.g., "App Store")
  imageUrl: string; // URL of the image (e.g., "images/app-store.png")
  linkUrl: string; // URL for the link (e.g., "https://www.apple.com/app-store/")
}

const StoreButton: React.FC<StoreButtonProps> = ({ downloadText, storeText, imageUrl, linkUrl }) => {
  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles['store-button']}
    >
        <img
          src={imageUrl}
          alt={storeText}
          className={styles['store-button-image']}
        />
        <div className={styles['store-texts']}>
          <div className={styles['store-text']}>{downloadText}</div>
          <div className={styles['store-text-bold']}>{storeText}</div>
        </div>
    </a>
  );
};

export default StoreButton;