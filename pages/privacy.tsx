// Privacy.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import TermsPage, { TermsContentObject } from '../components/TermsPage';

export default function Privacy() {
  const { t } = useTranslation('privacy'); // Use the 'privacy' namespace
  const privacy = t('data', { returnObjects: true }) as TermsContentObject; // Type assertion to match JSON

  return (
    <TermsPage
      title={t('page_title')} // Access the page_title key
      contents={privacy.contents}
      iconUrl="/images/stamp-blue.png"
    />
  );
}