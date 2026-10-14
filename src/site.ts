import type { LanguageCode } from './i18n';

export const contact = {
  phone: '+48 727 339 996',
  phoneHref: 'tel:+48727339996',
  email: 'staraplebania@stplebania.pl',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Stara+Plebania+Pastewnik+46+Marcisz%C3%B3w',
  instagram: 'https://www.instagram.com/staraplebania/',
  facebook: 'https://www.facebook.com/people/Stara-Plebania/61559207286890/',
};

// Booking.com serves its own translated page per locale suffix.
const bookingLocale: Record<LanguageCode, string> = {
  pl: 'pl',
  en: 'en-gb',
  de: 'de',
  es: 'es',
  ru: 'ru',
};

export const bookingUrl = (lang: string) =>
  `https://www.booking.com/hotel/pl/stara-plebania-pastewnik.${bookingLocale[lang as LanguageCode] ?? 'pl'}.html`;
