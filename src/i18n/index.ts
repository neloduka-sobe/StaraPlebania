import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pl from './locales/pl';

export const languages = [
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
] as const;

export type LanguageCode = (typeof languages)[number]['code'];

// Polish ships with the page; the other locales load only when picked.
const loaders: Record<Exclude<LanguageCode, 'pl'>, () => Promise<{ default: object }>> = {
  en: () => import('./locales/en'),
  de: () => import('./locales/de'),
  es: () => import('./locales/es'),
  ru: () => import('./locales/ru'),
};

const STORAGE_KEY = 'lang';

i18n.use(initReactI18next).init({
  resources: { pl: { translation: pl } },
  lng: 'pl',
  fallbackLng: 'pl',
  interpolation: { escapeValue: false },
});

// Polish lives at the site root, every other language under its own path (/en/ …),
// each prerendered so search engines can index it (see scripts/prerender.js).
export const languagePath = (code: LanguageCode) => (code === 'pl' ? '/' : `/${code}/`);

export function languageFromPath(pathname: string): LanguageCode {
  const segment = pathname.split('/')[1];
  return segment in loaders ? (segment as LanguageCode) : 'pl';
}

// Loads and activates a language; safe to call while prerendering.
export async function loadLanguage(code: LanguageCode) {
  if (code !== 'pl' && !i18n.hasResourceBundle(code, 'translation')) {
    const { default: translation } = await loaders[code]();
    i18n.addResourceBundle(code, 'translation', translation);
  }
  await i18n.changeLanguage(code);
}

export async function setLanguage(code: LanguageCode) {
  await loadLanguage(code);
  document.documentElement.lang = code;
  document.title = i18n.t('meta.title');
  document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.t('meta.description'));
  if (location.pathname !== languagePath(code)) {
    history.replaceState(null, '', languagePath(code) + location.hash);
  }
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // Storage unavailable (private mode); the choice just isn't remembered.
  }
}

// On the Polish root page, switch to the language the visitor picked last time.
// A language-specific URL always wins.
export function restoreLanguage() {
  if (languageFromPath(location.pathname) !== 'pl') return;
  let saved: string | null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch {
    return;
  }
  if (saved && saved !== 'pl' && saved in loaders) {
    void setLanguage(saved as LanguageCode);
  }
}

export default i18n;
