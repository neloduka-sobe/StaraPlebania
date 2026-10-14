import { useTranslation } from 'react-i18next';
import LazyMap from './LazyMap';
import SectionHeader from './SectionHeader';
import { Bike, Fence, Footprints, Landmark, Mountain, Snowflake } from 'lucide-react';

const activities = [
  { Icon: Bike, key: 'biking', distance: '10 m' },
  { Icon: Mountain, key: 'hiking', distance: '500 m' },
  { Icon: Footprints, key: 'running', distance: '2 km' },
  { Icon: Fence, key: 'horses', distance: '4 km' },
  { Icon: Landmark, key: 'monuments', distance: '5 km' },
  { Icon: Snowflake, key: 'skiing', distance: '20 km' },
];

const Location = () => {
  const { t } = useTranslation();

  return (
    <section id="location" className="py-10">
      <div className="wrap">
        <SectionHeader title={t('location.title')} subtitle={t('location.subtitle')} />

        <div className="grid items-center gap-12 lg:grid-cols-[repeat(2,minmax(0,1fr))]">
          <div>
            <LazyMap title={t('location.mapTitle')} />
            <p className="leading-relaxed text-ink-2">{t('location.description')}</p>
          </div>

          <div>
            <h3 className="mb-4 text-2xl">{t('location.activities')}</h3>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {activities.map(({ Icon, key, distance }) => (
                <li key={key} className="card flex flex-col items-center p-6 text-center">
                  <Icon size={24} className="mb-3 text-accent" aria-hidden="true" />
                  <span className="font-semibold">{t(`location.${key}`)}</span>
                  <span className="mt-1 text-ink-2">{distance}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
