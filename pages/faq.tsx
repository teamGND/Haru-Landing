import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/FAQPage.module.css';

const FAQPage: React.FC = () => {
  const { t } = useTranslation();

  // Fetch FAQs from translations with fallback
  const faqsRaw = t('faq', { returnObjects: true });
  // Ensure faqs is an array, fallback to empty array if invalid
  const faqs = Array.isArray(faqsRaw) ? faqsRaw : [];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles['faq-page']}>
      <h2 className={styles['section-title']}>{t('header.faq')}</h2>
      <div className={styles['faq-container']}>
        {faqs.length === 0 ? (
          <p>{t('faq_fallback', 'No FAQs available at the moment.')}</p>
        ) : (
          faqs.map((faq: { q: string; a: string }, index: number) => (
            <div key={index} className={styles['faq-item']}>
              <div
                className={styles['faq-question']}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.q}</span>
                <span className={styles['toggle-icon']}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <div className={styles['faq-answer']}>
                  <p>
                    {faq.a.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < faq.a.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default FAQPage;