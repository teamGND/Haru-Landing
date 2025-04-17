// locales/i18nConfig.ts
import translationEN from './en/translation.json';
import translationKO from './ko/translation.json';
import translationZH from './zh/translation.json';
import translationVI from './vi/translation.json';
import translationRU from './ru/translation.json';

import termsOfServiceKO from './ko/terms.json';
import termsOfServiceEN from './en/terms.json';
import termsOfServiceZH from './zh/terms.json';
import termsOfServiceVI from './vi/terms.json';
import termsOfServiceRU from './ru/terms.json';

import privacyPolicyKO from './ko/privacy.json';
import privacyPolicyEN from './en/privacy.json';
import privacyPolicyZH from './zh/privacy.json';
import privacyPolicyVI from './vi/privacy.json';
import privacyPolicyRU from './ru/privacy.json';

export const fallbackLng = 'ko';
export const locales = ['ko', 'en', 'zh', 'vi', 'ru'] as const;
export const defaultNS = 'translation';

export const resources = {
  en: {
    translation: translationEN,
    terms: termsOfServiceEN,
    privacy: privacyPolicyEN,
  },
  ko: {
    translation: translationKO,
    terms: termsOfServiceKO,
    privacy: privacyPolicyKO,
  },
  zh: {
    translation: translationZH,
    terms: termsOfServiceZH,
    privacy: privacyPolicyZH,
  },
  vi: {
    translation: translationVI,
    terms: termsOfServiceVI,
    privacy: privacyPolicyVI,
  },
  ru: {
    translation: translationRU,
    terms: termsOfServiceRU,
    privacy: privacyPolicyRU,
  },
};
