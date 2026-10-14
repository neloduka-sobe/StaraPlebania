import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Ruler, Users } from 'lucide-react';
import type { Apartment } from '../types';
import ApartmentGallery from './ApartmentGallery';

const ApartmentCard = ({ apartment }: { apartment: Apartment }) => {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const cover = apartment.images[0];

  return (
    <article className="card overflow-hidden">
      <button type="button" onClick={() => setShowGallery(true)} className="block w-full" aria-label={t('apartments.gallery')}>
        <img src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} loading="lazy" decoding="async" className="h-48 w-full object-cover" />
      </button>

      <div className="p-6">
        <h3 className="text-2xl">{t(apartment.name)}</h3>
        <div className="mt-2 flex justify-between text-ink-2">
          <span className="flex items-center gap-1.5">
            <Users size={18} aria-hidden="true" />
            {apartment.capacity} {t('apartments.people')}
          </span>
          <span className="flex items-center gap-1.5 tabular-nums">
            <Ruler size={18} aria-hidden="true" />
            {apartment.size} {t('apartments.sqm')}
          </span>
        </div>
        <p className="mt-4 text-ink-2">{t(apartment.descriptionKey)}</p>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => setShowDetails((v) => !v)}
            aria-expanded={showDetails}
            className="btn flex-1 bg-accent-soft px-4 py-2 text-accent-strong hover:bg-rule"
          >
            {t('apartments.viewDetails')}
            <ChevronRight size={16} className={`transition-transform ${showDetails ? 'rotate-90' : ''}`} aria-hidden="true" />
          </button>
          <a href="#booking" className="btn btn-primary flex-1 px-4 py-2">
            {t('apartments.bookNow')}
          </a>
        </div>

        {showDetails && (
          <div className="mt-5 border-t border-rule pt-4">
            <h4 className="font-semibold">{t('apartments.amenitiesName')}</h4>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-ink-2">
              {apartment.amenities.map((amenity) => (
                <li key={amenity} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {t(amenity)}
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => setShowGallery(true)} className="mt-4 font-medium text-accent hover:text-accent-strong">
              {t('apartments.gallery')} →
            </button>
          </div>
        )}
      </div>

      {showGallery && <ApartmentGallery images={apartment.images} title={t(apartment.name)} onClose={() => setShowGallery(false)} />}
    </article>
  );
};

export default ApartmentCard;
