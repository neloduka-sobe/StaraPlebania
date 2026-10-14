// Not rendered at the moment — see App.tsx. Kept so the rooms section can return.
import { useTranslation } from 'react-i18next';
import { apartments } from '../data/apartments';
import ApartmentCard from './ApartmentCard';
import SectionHeader from './SectionHeader';

const Apartments = () => {
  const { t } = useTranslation();

  return (
    <section id="apartments" className="py-20">
      <div className="wrap">
        <SectionHeader title={t('apartments.title')} subtitle={t('apartments.subtitle')} />
        <div className="grid gap-8 md:grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(0,1fr))]">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apartments;
