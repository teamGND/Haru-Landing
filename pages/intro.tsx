// components/IntroScreen.tsx
import React, { useState } from 'react';
import styles from '../styles/IntroPage.module.css';

// Define the type for each intro item
interface IntroItem {
  id: number;
  icon: string; // URL for the icon image
  title: string;
  description: string;
  image: string; // URL for the image to display on the right
}

const IntroPage: React.FC = () => {
  // Define the intro items data
   const introItems: IntroItem[] = [
    {
      id: 1,
      icon: 'images/intro-1.png', // Replace with actual icon path
      title: '교재 1권 가격으로\n4권의 혜택을',
      description: '교재 1권 가격으로\n4권의 혜택을',
      image: 'images/mockup.png', // Replace with actual image path
    },
    {
      id: 2,
      icon: 'images/intro-2.png',
      title: '한국어 교육\n전공자의 연구 결과',
      description: '평생 가입 안정 응원서비스.',
      image: 'images/mockup.png', // Replace with actual image path
    },
    {
      id: 3,
      icon: 'images/intro-3.png',
      title: '나에게 꼭 맞는\n학습 피드백으로',
      description: '빨리 배울 수',
      image: 'images/mockup.png', // Replace with actual image path
    },
    {
      id: 4,
      icon: 'images/intro-4.png',
      title: '캐릭터와 함께\n게임처럼 재미있게',
      description: '',
      image: 'images/mockup.png', // Replace with actual image path
    },
  ];

  // State to track the active item
  const [activeItemId, setActiveItemId] = useState<number>(introItems[0].id);

  // Find the active item to display its content on the right
  const activeItem = introItems.find((item) => item.id === activeItemId) || introItems[0];

  return (
    <section id="intro" className={styles['intro-page']}>
      <h2 className={styles['section-title']}>하루한글 앱서비스 소개</h2>
      <div className={styles['intro-container']}>
        {/* Left Sidebar */}
        <div className={styles['sidebar']}>
          {introItems.map((item) => (
            <div
              key={item.id}
              className={`${styles['intro-item']} ${
                activeItemId === item.id ? styles.active : ''
              }`}
              onClick={() => setActiveItemId(item.id)}
            >
              <img src={item.icon} alt={item.title} className={styles['intro-icon']} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        {/* Right Content Container */}
        <div className={styles['content-container']}>
          <div className={styles['content-description']}>
            {activeItem.description.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < activeItem.description.split('\n').length - 1 && <br />}
              </span>
            ))}
          </div>
          {activeItem.image && (
            <img
              src={activeItem.image}
              alt="Content Image"
              className={styles['content-image']}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroPage;