import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/ReviewsPage.module.css';

const ReviewsPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Log current language for debugging
  console.log('Current language:', i18n.language);

  // Fetch reviews array
  const reviewsRaw = t('reviews', { returnObjects: true });
  const reviews = Array.isArray(reviewsRaw) ? reviewsRaw : [];
  console.log('Reviews:', reviews);

  return (
    <section id="reviews" className={styles['reviews-page']}>
      <div className={styles['section-title']}>
        {t('header.reviews', 'User Reviews')}
      </div>
      <div className={styles['reviews-container']}>
        {reviews.length === 0 ? (
          <p>{t('reviews_fallback', 'No reviews available yet.')}</p>
        ) : (
          reviews.map((review: { author: string; quote: string }, index: number) => (
            <div key={index} className={styles['review-card']} aria-label={`Review by ${review.author}`}>
              <p className={styles['review-author']}>{review.author}</p>
              <div className={styles['review-quote']}>
                <div className={styles['quote-mark']}>“</div>
                {review.quote}
                <div className={styles['quote-mark']}>”</div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ReviewsPage;