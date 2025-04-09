// components/LevelPage.tsx
import React from 'react';
import styles from '../styles/LevelPage.module.css';

const LevelPage: React.FC = () => {
  // Define the data for the table
  const levels = [
    { name: 'Alphabet', vocabulary: '30 words', grammar: '한글 읽고 쓰기', expression: '-', duration: '10 days' },
    { name: 'Beginner', vocabulary: '400 words', grammar: '기본 문장 구조,\n관용 표현,\n단문 대화', expression: '자기 소개, 물건 주문, 음식 주문 등', duration: '1-2 months' },
    { name: 'Elementary', vocabulary: '800 words', grammar: '문어적 구어 사용\n도사적 발성 음성,\n복구 별음 음성', expression: '문단 단위 표현', duration: '2-3 months' },
    { name: 'Intermediate Low', vocabulary: '1,300 words', grammar: '조건 내용, 어미 등 다양한 형태의 문장, 존칭 묘사 구조', expression: '간단한 글 작성, 문단 단위 표현 이해', duration: '3-4 months' },
    { name: 'Intermediate High', vocabulary: '2,000 words', grammar: '형태 어미가 포함된 문장, 존칭 구문, (예) 로서/로서, 는 듯/는 줄', expression: '공적인 표현 이해, 시사 문체 완성 포함 공적인 글 구문', duration: '4-6 months' },
    { name: 'Advanced', vocabulary: '3,000+ words', grammar: '문법과 영역에 대한 미묘한 인지 자극화, 한신언의 차이 이해', expression: '전문 분야 수준 이해, 정치/신문체 패턴 구문', duration: '6+ months' },
  ];

  return (
    <section id="levels" className={styles['level-page']}>
      <div className={styles['header']}>
        <h2 className={styles['section-title']}>등급별 학습</h2>
        <a href="#level-test" className={styles['test-button']}>
          <div>
            If you don’t know your level
            <div className={styles['begin-the-test']}>BEGIN THE TEST</div>
          </div>
          <span className={styles['arrow']}>→</span>
        </a>
      </div>

      <div className={styles['table-container']}>
        <table className={styles['level-table']}>
          <thead>
            <tr>
              <th></th> {/* Empty cell for the row labels */}
              {levels.map((level) => (
                <th key={level.name} className={styles['level-header']}>
                  {level.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles['row-label']}>Vocabulary</td>
              {levels.map((level) => (
                <td key={level.name} className={styles['row-text']}>{level.vocabulary}</td>
              ))}
            </tr>
            <tr>
              <td className={styles['row-label']}>Grammar</td>
              {levels.map((level) => (
                <td key={level.name} className={styles['row-text']}>{level.grammar}</td>
              ))}
            </tr>
            <tr>
              <td className={styles['row-label']}>Expression</td>
              {levels.map((level) => (
                <td key={level.name} className={styles['row-text']}>{level.expression}</td>
              ))}
            </tr>
            <tr>
              <td className={styles['row-label']}>Duration</td>
              {levels.map((level) => (
                <td key={level.name} className={styles['row-text']}>{level.duration}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LevelPage;