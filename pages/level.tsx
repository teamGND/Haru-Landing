import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/LevelPage.module.css';

const LevelPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  console.log('Current language:', i18n.language);

  const levelKeys = [
    'alphabet',
    'beginner',
    'elementary',
    'intermediate_low',
    'intermediate_high',
    'advanced',
  ];

  // Fetch arrays directly
  const vocabularies = t('level_contents.vocabulary', { returnObjects: true }) as string[];
  const grammars = t('level_contents.grammar', { returnObjects: true }) as string[];
  const expressions = t('level_contents.expression', { returnObjects: true }) as string[];
  const periods = t('level_contents.period', { returnObjects: true }) as string[];

  const levels = levelKeys.map((key, index) => {
    const name = t(`level_column.${key}`, key);
    const vocabulary = vocabularies[index] || `Vocab ${index + 1}`;
    const grammar = grammars[index] || `Grammar ${index + 1}`;
    const expression = expressions[index] || `Expression ${index + 1}`;
    const duration = periods[index] || `Duration ${index + 1}`;
    const levelData = { name, vocabulary, grammar, expression, duration };
    console.log(`Level ${key}:`, levelData);
    return levelData;
  });

  return (
    <section id="levels" className={styles['level-page']}>
      <h2 className={styles['section-title']}>
        {t('header.level', 'Learning Levels')}
      </h2>
      <div className={styles['header']}>
        <a href="#level-test" className={styles['test-button']}>
          <div>
            {t('level_test.prompt', 'Check your level')}
            <div className={styles['begin-the-test']}>
              {t('level_test.begin', 'Start Test')}
            </div>
          </div>
          <span className={styles['arrow']}>→</span>
        </a>
      </div>

      <div className={styles['table-container']}>
        <table className={styles['level-table']}>
          <thead>
            <tr>
              <th></th>
              {levels.map((level) => (
                <th key={level.name} className={styles['level-header']}>
                  {level.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles['row-label']}>
                {t('level_row.vocabulary', 'Vocabulary')}
              </td>
              {levels.map((level) => (
                <td key={level.name} className={styles['row-text']}>
                  {level.vocabulary}
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles['row-label']}>
                {t('level_row.grammar', 'Grammar')}
              </td>
              {levels.map((level) => (
                <td key={level.name} className={styles['row-text']}>
                  {level.grammar.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < level.grammar.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles['row-label']}>
                {t('level_row.expression', 'Expression')}
              </td>
              {levels.map((level) => (
                <td key={level.name} className={styles['row-text']}>
                  {level.expression}
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles['row-label']}>
                {t('level_row.duration', 'Duration')}
              </td>
              {levels.map((level) => (
                <td key={level.name} className={styles['row-text']}>
                  {level.duration}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LevelPage;