import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

// Smaller copies are generated from hero.webp, which stays the full-size original.
const heroSrcSet = [800, 1280, 1920, 2560].map((w) => `/assets/images/hero-${w}.webp ${w}w`).join(', ');

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative isolate flex h-svh min-h-[32rem] items-center justify-center overflow-hidden bg-night text-on-photo">
      <img
        src="/assets/images/hero-1920.webp"
        srcSet={heroSrcSet}
        sizes="100vw"
        width={1920}
        height={1281}
        alt={t('hero.imageAlt')}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-scrim/60" aria-hidden="true" />

      <div className="wrap text-center">
        <h1 className="text-4xl md:text-6xl">{t('hero.title')}</h1>
        <p className="mt-4 text-xl md:text-2xl">{t('hero.subtitle')}</p>
        <a href="#booking" className="btn btn-primary mt-8 px-8">
          {t('hero.cta')}
        </a>
      </div>

      <a href="#booking" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-sm">
        {t('hero.scroll')}
        <ChevronDown size={24} className="mt-1" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
