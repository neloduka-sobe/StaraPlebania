import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contact } from '../site';

// Lucide no longer ships brand logos, so these two are inline.
const InstagramIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const linkClass = 'transition-colors hover:text-on-photo';

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { href: '#home', label: t('nav.home') },
    { href: '#booking', label: t('nav.booking') },
    { href: '#location', label: t('nav.location') },
    { href: '#history', label: t('nav.history') },
  ];

  return (
    <footer id="contact" className="bg-night pt-16 pb-10 text-night-2 [&_:focus-visible]:outline-accent-light">
      <div className="wrap grid gap-12 md:grid-cols-[minmax(0,4fr)_minmax(0,5fr)_minmax(0,3fr)]">
        <div>
          <p className="text-2xl font-bold text-on-photo">Stara Plebania</p>
          <p className="mt-3">{t('footer.description')}</p>
          <div className="mt-6 flex gap-4">
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={linkClass}>
              <InstagramIcon />
            </a>
            <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={linkClass}>
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl text-on-photo">{t('footer.callToAction')}</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className={`flex gap-3 ${linkClass}`}>
                <MapPin size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                {t('footer.address')}
              </a>
            </li>
            <li>
              <a href={contact.phoneHref} className={`flex gap-3 ${linkClass}`}>
                <Phone size={20} className="shrink-0" aria-hidden="true" />
                <span className="tabular-nums">{contact.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className={`flex min-w-0 gap-3 ${linkClass}`}>
                <Mail size={20} className="shrink-0" aria-hidden="true" />
                <span className="break-all">{contact.email}</span>
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label={t('footer.navigation')}>
          <h2 className="text-xl text-on-photo">{t('footer.navigation')}</h2>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="wrap mt-12">
        <p className="border-t border-night-rule pt-8 text-center text-sm" suppressHydrationWarning>
          © {new Date().getFullYear()} Stara Plebania. {t('footer.rights')}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
