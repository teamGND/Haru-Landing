// components/ReviewsPage.tsx
import React from 'react';
import styles from '../styles/ReviewsPage.module.css';

const ReviewsPage: React.FC = () => {
  const reviews = [
    {
      author: '안산 다문화센터\n한국어 교사',
      quote: '이주 학생들별로 언어와 수준, 시작 시기에 맞춰서 학습을 관리할 수 있어서 수업에 잘 활용하고 있어요.'
    },
    {
      author: '10세 러시아 여학생',
      quote: '한국어를 잘 하고 싶었는데, 공부는 재미가 없었어요. 책보다 더 재미있게 공부할 수 있어서 친구들에게 추천해요.'
    },
    {
      author: '초6 딸이 있는\n중국 이주 학부모',
      quote: '한국에 이민을 오게된 후 집주변에 한국어 학원이나 센터가 없어서 아이 학교와 생활 적응이 고민이었어요. 하루 한글을 통해 공부를 시키고 있는데, 실력이 눈에 띄게 늘고 있어요.'
    },
    {
      author: '서울 OO대학교\n20대 베트남 유학생',
      quote: '어학당의 경우 너무 비싸기도 하고, 스스로 독학을 하려니 막막한 느낌이었어요. 여러 방법으로 독학을 시도했지만, 하루 한글은 책과 온라인 강의의 장점을 합친 장점을 가져 처음 스스로 한국어를 배우기에 아주 좋아요.'
    },
  ];

  return (
    <section id="reviews" className={styles['reviews-page']}>
      <div className={styles['section-title']}>사용자 후기</div>  
      <div className={styles['reviews-container']}>
        {reviews.map((review, index) => (
          <div key={index} className={styles['review-card']}>
            <p className={styles['review-author']}>{review.author}</p>
            <div className={styles['review-quote']}>
              <div className={styles['quote-mark']}>“</div>
              {review.quote}
              <div className={styles['quote-mark']}>”</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsPage;