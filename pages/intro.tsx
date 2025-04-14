import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/IntroPage.module.css';

const IntroPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Log current language for debugging
  console.log('Current language:', i18n.language);

  // Fetch the intro array directly
  const introItemsRaw = t('intro', { returnObjects: true });
  const introItems = Array.isArray(introItemsRaw) ? introItemsRaw : [];
  console.log('introItems:', introItems);

  // State to track the active item (0-based index)
  const [activeItemId, setActiveItemId] = useState<number>(0);

  // Define the number of intro items
  const introCount = introItems.length || 4; // Fallback to 4 if empty

  // Get the active item's data
  const activeItem = {
    title: introItems[activeItemId] || t('intro_fallback', 'Introduction item'),
    description: introItems[activeItemId] || t('intro_fallback', 'Introduction item'),
    image: 'images/mockup.png',
  };

  return (
    <section id="intro" className={styles['intro-page']}>
      <h2 className={styles['section-title']}>
        {t('header.intro', 'Introduction')}
      </h2>
      <div className={styles['intro-container']}>
        {/* Left Sidebar */}
        <div className={styles['sidebar']}>
          {Array.from({ length: introCount }).map((_, index) => (
            <div
              key={index}
              className={`${styles['intro-item']} ${
                activeItemId === index ? styles.active : ''
              }`}
              onClick={() => setActiveItemId(index)}
            >
              <img
                src={`images/intro-${index + 1}.png`}
                alt={introItems[index] || `Intro ${index + 1}`}
                className={styles['intro-icon']}
              />
              <span>
                {(introItems[index] || t('intro_fallback', 'Introduction item'))
                  .split('\n')
                  .map((line:String, lineIndex:number) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex <
                        (introItems[index] || t('intro_fallback')).split('\n')
                          .length -
                          1 && <br />}
                    </React.Fragment>
                  ))}
              </span>
            </div>
          ))}
        </div>

        {/* Right Content Container */}
        <div className={styles['content-container']}>
          {/* <div className={styles['content-description']}>
            {activeItem.description.split('\n').map((line:String, index:number) => (
              <span key={index}>
                {line}
                {index < activeItem.description.split('\n').length - 1 && <br />}
              </span>
            ))}
          </div> */}
          {activeItem.image && (
            <img
              src={activeItem.image}
              alt={t('content_image_alt', 'Content image')}
              className={styles['content-image']}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroPage;