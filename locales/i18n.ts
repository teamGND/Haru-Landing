import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationKO from "../locales/ko/translation.json";
import translationZH from "../locales/zh/translation.json";
import translationVI from "../locales/vi/translation.json";
import translationRU from "../locales/ru/translation.json";

import termsOfServiceKO from "../locales/ko/terms.json";
import termsOfServiceEN from "../locales/en/terms.json";
import termsOfServiceZH from "../locales/zh/terms.json";
import termsOfServiceVI from "../locales/vi/terms.json";
import termsOfServiceRU from "../locales/ru/terms.json";

import privacyPolicyKO from "../locales/ko/privacy.json";
import privacyPolicyEN from "../locales/en/privacy.json";
import privacyPolicyZH from "../locales/zh/privacy.json";
import privacyPolicyVI from "../locales/vi/privacy.json";
import privacyPolicyRU from "../locales/ru/privacy.json";

const resources = {
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

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko", // 기본 설정 언어, 'cimode'로 설정할 경우 키 값으로 출력된다.
    fallbackLng: "en", // 번역 파일에서 찾을 수 없는 경우 기본 언어
    ns: ['translation', 'terms', 'privacy'], // 사용할 네임스페이스
    defaultNS: 'translation', // 기본 네임스페이스
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;