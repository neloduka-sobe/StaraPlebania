import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { languages, setLanguage, type LanguageCode } from '../i18n';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (!langRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setLangOpen(false);
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [langOpen]);

  const pickLanguage = (code: LanguageCode) => {
    void setLanguage(code);
    setLangOpen(false);
    setMenuOpen(false);
  };

  const links = [
    { href: '#booking', label: t('nav.booking') },
    { href: '#location', label: t('nav.location') },
    { href: '#history', label: t('nav.history') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const solid = scrolled || menuOpen;
  const current = languages.find((l) => l.code === i18n.language) ?? languages[0];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-ink-2 backdrop-blur-lg transition-colors duration-200 ${
        solid ? 'bg-paper shadow-md' : 'bg-paper/30'
      }`}
    >
      <nav className="wrap flex h-16 items-center justify-between gap-4" aria-label={t('nav.label')}>
        <a href="#home" className="text-xl font-bold whitespace-nowrap text-accent">
          Stara Plebania
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="whitespace-nowrap transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-expanded={langOpen}
              aria-haspopup="true"
              aria-label={t('nav.language')}
              className="flex items-center gap-1.5 rounded-md px-2 py-1.5 transition-colors hover:text-accent"
            >
              <Globe size={18} aria-hidden="true" />
              <span className="text-sm font-medium uppercase">{current.code}</span>
            </button>
            {langOpen && (
              <ul className="absolute right-0 mt-2 w-44 overflow-hidden rounded-md border border-rule bg-paper py-1 text-ink shadow-lg">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      type="button"
                      onClick={() => pickLanguage(lang.code)}
                      aria-current={lang.code === current.code}
                      className="flex w-full items-center gap-2 px-4 py-2 text-left hover:bg-accent-soft aria-[current=true]:font-semibold aria-[current=true]:text-accent"
                    >
                      <span aria-hidden="true">{lang.flag}</span>
                      {lang.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a href="#booking" className="btn btn-primary px-4 py-2 text-sm">
            {t('nav.book')}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={t('nav.menu')}
          className="-mr-2 rounded-md p-2 transition-colors hover:text-accent md:hidden"
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-rule md:hidden">
          <ul className="wrap flex flex-col py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className="block py-3 text-lg hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="wrap flex flex-wrap gap-2 border-t border-rule py-4" role="group" aria-label={t('nav.language')}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => pickLanguage(lang.code)}
                aria-pressed={lang.code === current.code}
                className="rounded-md border border-rule px-3 py-1.5 text-sm aria-pressed:border-accent aria-pressed:bg-accent-soft aria-pressed:text-accent-strong"
              >
                <span aria-hidden="true">{lang.flag}</span> {lang.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
