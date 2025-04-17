// Terms.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import TermsPage, { TermsContentObject } from '../components/TermsPage';

export default function Terms() {
  const { t } = useTranslation('terms');
  const terms = t('data', { returnObjects: true }) as TermsContentObject; // Type assertion to match JSON
  return (
    <TermsPage
      title={terms.page_title} // Access the page_title key
      contents={terms.contents} // Access the contents key
      iconUrl="/images/stamp-grey.png"
    />
  );
}