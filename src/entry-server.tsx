import { renderToString } from 'react-dom/server';
import i18n, { languagePath, languages, loadLanguage, type LanguageCode } from './i18n';
import { bookingUrl, contact } from './site';
import App from './App';

export { languages };

const SITE = 'https://stplebania.pl';

const ogLocale: Record<LanguageCode, string> = {
  pl: 'pl_PL',
  en: 'en_GB',
  de: 'de_DE',
  es: 'es_ES',
  ru: 'ru_RU',
};

const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export async function render(lang: LanguageCode) {
  await loadLanguage(lang);
  return { html: renderToString(<App />), head: head(lang) };
}

// Title, description, language alternates, link previews and schema.org data for one language.
function head(lang: LanguageCode) {
  const t = i18n.t;
  const url = SITE + languagePath(lang);
  const title = escapeAttr(t('meta.title'));
  const description = escapeAttr(t('meta.description'));
  const image = `${SITE}/assets/images/hero-1280.webp`;

  const business = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${SITE}/#business`,
    name: 'Stara Plebania',
    description: t('meta.description'),
    url,
    image: [`${SITE}/assets/images/hero-1920.webp`, `${SITE}/assets/images/historia4.webp`],
    telephone: contact.phone.replace(/ /g, ''),
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pastewnik 46',
      postalCode: '58-410',
      addressLocality: 'Marciszów',
      addressRegion: 'dolnośląskie',
      addressCountry: 'PL',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 50.88375, longitude: 16.02802 },
    hasMap: contact.mapsUrl,
    sameAs: [contact.instagram, contact.facebook, bookingUrl('pl')],
    availableLanguage: languages.map((l) => l.code),
  };

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...languages.map(({ code }) => `<link rel="alternate" hreflang="${code}" href="${SITE}${languagePath(code)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${SITE}/" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Stara Plebania" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:locale" content="${ogLocale[lang]}" />`,
    ...languages.filter(({ code }) => code !== lang).map(({ code }) => `<meta property="og:locale:alternate" content="${ogLocale[code]}" />`),
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1280" />`,
    `<meta property="og:image:height" content="854" />`,
    `<meta property="og:image:alt" content="${escapeAttr(t('hero.imageAlt'))}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${JSON.stringify(business).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');
}
