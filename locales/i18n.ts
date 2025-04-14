import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationKO from "../locales/ko/translation.json";
import translationZH from "../locales/zh/translation.json";
import translationVI from "../locales/vi/translation.json";
import translationRU from "../locales/ru/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  ko: {
    translation: translationKO
  },
  zh: {
    translation: translationZH
  },  
  vi: {
    translation: translationVI
  },  
  ru: {
    translation: translationRU
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko", // 기본 설정 언어, 'cimode'로 설정할 경우 키 값으로 출력된다.
    fallbackLng: "en", // 번역 파일에서 찾을 수 없는 경우 기본 언어
    interpolation: {
      escapeValue: false
    }
  });



export default i18n;