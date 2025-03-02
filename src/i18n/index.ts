import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en';
import plTranslation from './locales/pl';
import deTranslation from './locales/de';
import esTranslation from './locales/es';
import ruTranslation from './locales/ru';

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      pl: {
        translation: plTranslation
      },
      de: {
        translation: deTranslation
      },
      es: {
        translation: esTranslation
      },
      ru: {
        translation: ruTranslation
      }
    },
    lng: 'pl',
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

export const languages = [
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];