import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, DotSquare as SquareFootage, ChevronRight } from 'lucide-react';
import { Apartment } from '../types';
import ApartmentGallery from './ApartmentGallery';

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment }) => {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);
  const openGallery = () => setShowGallery(true);
  const closeGallery = () => setShowGallery(false);

  return (
    <>
      <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Apartment Image */}
        <div 
          className="h-48 bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${apartment.images[0].src})` }}
          onClick={openGallery}
        ></div>
        
        {/* Apartment Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{apartment.name}</h3>
          
          {/* Quick Info */}
          <div className="flex justify-between mb-4">
            <div className="flex items-center text-gray-600">
              <Users size={18} className="mr-1" />
              <span>{apartment.capacity} {t('apartments.people')}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <SquareFootage size={18} className="mr-1" />
              <span>{apartment.size} {t('apartments.sqm')}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span>{apartment.price} zł {t('apartments.perNight')}</span>
            </div>
          </div>
          
          {/* Description - Using translation key instead of direct description */}
          <p className="text-gray-600 mb-4">{t(apartment.descriptionKey)}</p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <button 
              onClick={toggleDetails}
              className="flex-1 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-200 transition-colors flex items-center justify-center"
            >
              {t('apartments.viewDetails')}
              <ChevronRight size={16} className={`ml-1 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
            </button>
            <a 
              href="#contact"
              className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-center"
            >
              {t('apartments.bookNow')}
            </a>
          </div>
          
          {/* Expanded Details */}
          {showDetails && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t"
            >
              <h4 className="font-semibold mb-2">{t('apartments.amenitiesName')}</h4>
              <ul className="grid grid-cols-2 gap-2">
                {apartment.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    {t(amenity)}
                  </li>
                ))}
              </ul>
              <button 
                onClick={openGallery}
                className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
              >
                {t('apartments.gallery')} →
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
      
      {/* Gallery Modal */}
      {showGallery && (
        <ApartmentGallery 
          images={apartment.images} 
          onClose={closeGallery} 
          title={apartment.name}
        />
      )}
    </>
  );
};

export default ApartmentCard;