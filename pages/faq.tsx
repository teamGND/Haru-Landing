// components/FAQPage.tsx
import React, { useState } from 'react';
import styles from '../styles/FAQPage.module.css';

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: '다른 언어로 학습하려면 어떻게 해야 하나요?',
      answer:
        '하루 한글은 현재 영어, 중국어, 베트남어, 러시아어로 서비스를 제공하고 있어요.\n다른 언어의 경우, 사용자의 요청에 따라 순차적으로 추가됩니다. 하루 한글 인스타그램(@haru_hangeul)나 팔로우하고 소식을 빠르게 받아보세요.',
    },
    {
      question: '환불은 어떻게 하나요?',
      answer:
        '하루 한글은 앱스토어와 구글 플레이 스토어를 통해 결제가 이루어져 환불은 해당 플랫폼의 정책에 따라 진행되어요. 환불 요청은 앱스토어 또는 구글 플레이 스토어 고객센터에 문의해 주세요.',
    },
    {
      question: '하루 한글은 무료인가요?',
      answer: '네, 하루 한글은 광고없이 무료로 제공되고 있어요. 하루 한글이 마음에 드셨다면, 친구들에게 추천해 주세요. 후원을 통해서 더 많은 기능과 콘텐츠를 제공하는데에 도움이 됩니다. \n후원 링크: https://www.paypal.com/ncp/payment/SG466C5KKQQJW',
    },
    {
      question: '협력 기관 인증은 무엇인가요?',
      answer:
        '하루 한글은 한국어 교육 기관과 협력하여 인증을 부여하고 있어요. 인증을 받은 기관은 하루 한글의 공식 인증 마크를 사용할 수 있으며, 하루 한글의 교육 자료와 지원을 받을 수 있어요.',
    },
    {
      question: '협력 기관에 가입하려면 어떻게 해야 하나요?',
      answer:
        '하루 한글의 협력 기관에 가입하려면 하루 한글 이메일을 통해 요청할 수 있어요. 신청서가 승인되면 협력 기관으로 등록되고, 인증 마크와 지원을 받을 수 있어요.\n하루 한글 이메일: haru_admin@haruhangeul.com',
    }
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