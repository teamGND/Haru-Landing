// components/FAQPage.tsx
import React, { useState } from 'react';
import styles from '../styles/FAQPage.module.css';

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: '학급 기간 안정 무언인가요?',
      answer:
        '하루 한글은 현재 영어, 중국어, 베트남어, 러시아어로 서비스를 제공하고 있어요.\n다른 언어의 경우, 사용자의 요청에 따라 순차적으로 추가됩니다. 하루 한글 인스타그램(@haru_hangeul)나 팔로우하고 소식을 빠르게 받아보세요.',
    },
    {
      question: '다른 언어로 학습하려면 어떻게 해야 하나요?',
      answer:
        '하루 한글은 현재 영어, 중국어, 베트남어, 러시아어로 서비스를 제공하고 있어요.\n다른 언어의 경우, 사용자의 요청에 따라 순차적으로 추가됩니다. 하루 한글 인스타그램(@haru_hangeul)나 팔로우하고 소식을 빠르게 받아보세요.',
    },
    {
      question: '학급 기간에 등록하려면 어떻게 하면 되나요?',
      answer:
        '하루 한글은 현재 영어, 중국어, 베트남어, 러시아어로 서비스를 제공하고 있어요.\n다른 언어의 경우, 사용자의 요청에 따라 순차적으로 추가됩니다. 하루 한글 인스타그램(@haru_hangeul)나 팔로우하고 소식을 빠르게 받아보세요.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles['faq-page']}>
      <h2 className={styles['section-title']}>자주 묻는 질문</h2>
      <div className={styles['faq-container']}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles['faq-item']}>
            <div
              className={styles['faq-question']}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className={styles['toggle-icon']}>
                {openIndex === index ? '−' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <div className={styles['faq-answer']}>
                <p>
                  {faq.answer.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < faq.answer.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;