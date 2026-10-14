import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

// `small` is a 360px copy for phones; the originals are untouched.
const photos = [
  { src: '/assets/images/historia1.webp', width: 476, height: 319, altKey: 'history.photo1' },
  { src: '/assets/images/historia2.webp', small: '/assets/images/historia2-360.webp', width: 950, height: 670, altKey: 'history.photo2' },
  { src: '/assets/images/historia3.webp', small: '/assets/images/historia3-360.webp', width: 712, height: 499, altKey: 'history.photo3' },
  { src: '/assets/images/historia4.webp', small: '/assets/images/historia4-360.webp', width: 605, height: 573, altKey: 'history.photo4' },
];

const timeline = [
  { years: '? – 1946', key: 'period1' },
  { years: '1946 – 2020', key: 'period2' },
  { years: '2024', key: 'period3' },
];

const Photo = ({ src, small, width, height, altKey }: (typeof photos)[number]) => {
  const { t } = useTranslation();
  return (
    <img
      src={src}
      srcSet={small ? `${small} 360w, ${src} ${width}w` : undefined}
      sizes={small ? '(min-width: 1024px) 280px, 45vw' : undefined}
      width={width}
      height={height}
      alt={t(altKey)}
      loading="lazy"
      decoding="async"
      className="h-48 w-full rounded-lg bg-rule object-cover md:h-64"
    />
  );
};

const History = () => {
  const { t } = useTranslation();

  return (
    <section id="history" className="pt-10 pb-20">
      <div className="wrap">
        <SectionHeader title={t('history.title')} subtitle={t('history.subtitle')} />

        <div className="grid items-center gap-12 lg:grid-cols-[repeat(2,minmax(0,1fr))]">
          <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-4">
            <div className="space-y-4">
              <Photo {...photos[0]} />
              <Photo {...photos[1]} />
            </div>
            <div className="mt-8 space-y-4">
              <Photo {...photos[2]} />
              <Photo {...photos[3]} />
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <div className="space-y-6 leading-relaxed text-ink-2">
              <p>{t('history.paragraph1')}</p>
              <p>{t('history.paragraph2')}</p>
              <p>{t('history.paragraph3')}</p>
            </div>

            <div className="my-6 flex items-center" aria-hidden="true">
              <div className="h-px flex-1 bg-rule" />
              <span className="px-4 text-sm text-ink-2">? – 2025</span>
              <div className="h-px flex-1 bg-rule" />
            </div>

            <ol className="grid gap-6 text-center sm:grid-cols-3 sm:gap-4">
              {timeline.map(({ years, key }) => (
                <li key={key}>
                  <div className="text-2xl font-bold whitespace-nowrap text-accent tabular-nums lg:text-xl xl:text-2xl">{years}</div>
                  <div className="mt-1 text-sm text-ink-2">{t(`history.${key}`)}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
