import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './locales/tr.json';
import en from './locales/en.json';

const setDocumentLanguage = (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng;
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      tr: {
        translation: tr
      },
      en: {
        translation: en
      }
    },
    lng: 'tr',
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false
    }
  })
  .then(() => setDocumentLanguage(i18n.language));

i18n.on('languageChanged', (lng) => {
  setDocumentLanguage(lng);
});

export default i18n;

