// components/TermsPage.tsx
import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/TermsPage.module.css';
import { useRouter } from 'next/router';

interface TermsContent {
  title?: string;
  content?: string;
  contentList?: string[];
}

interface TermsPageProps {
  title: string;
  content: TermsContent[];
  iconUrl: string;
}

const TermsPage: React.FC<TermsPageProps> = ({ title, content, iconUrl }) => {
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  // Prevent body scrolling when the component is mounted
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset'; // Reset on unmount
    };
  }, []);

  // Calculate the scrollbar thumb height and position
  useEffect(() => {
    const updateScroll = () => {
      if (contentRef.current) {
        const container = contentRef.current;
        setContainerHeight(container.clientHeight);
        setScrollHeight(container.scrollHeight);
        setScrollTop(container.scrollTop);
      }
    };

    updateScroll(); // Initial calculation
    window.addEventListener('resize', updateScroll); // Update on window resize

    const container = contentRef.current;
    if (container) {
      container.addEventListener('scroll', updateScroll);
    }

    return () => {
      window.removeEventListener('resize', updateScroll);
      if (container) {
        container.removeEventListener('scroll', updateScroll);
      }
    };
  }, []);

  // Calculate the thumb height as a percentage of visible content
  const thumbHeightPercentage = containerHeight / scrollHeight;
  const thumbHeight = thumbHeightPercentage * containerHeight;
  const maxScrollTop = scrollHeight - containerHeight;
  const thumbPosition = maxScrollTop > 0 ? (scrollTop / maxScrollTop) * (containerHeight - thumbHeight) : 0;

  return (
    <div className={styles['terms-page']}>
      <div className={styles.header}>
        <div className={styles['header-left']}>
          <img src={iconUrl} alt="Icon" className={styles.logo} />
          <h1 className={styles.title}>{title}</h1>
        </div>
        <button onClick={() => router.back()} className={styles['cancel-button']} aria-label="Close page">
          ✕
        </button>
      </div>
      <div className={styles['content-container']}>
        <div className={styles.content} ref={contentRef}>
          {content.map((section, index) => (
            <div key={index} className={styles.section}>
              {section.title && <h2 className={styles['section-title']}>{section.title}</h2>}
              {section.content && (
                <p className={styles['section-content']}>{section.content}</p>
              )}
              {section.contentList && (
                <ul className={styles['content-list']}>
                  {section.contentList.map((item, idx) => (
                    <li key={idx} className={styles['content-list-item']}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className={styles['scrollbar-container']}>
          {scrollHeight > containerHeight && (
            <div
              className={styles['scrollbar-thumb']}
              style={{
                height: `${thumbHeight}px`,
                transform: `translateY(${thumbPosition}px)`,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsPage;