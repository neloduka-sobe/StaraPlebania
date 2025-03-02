import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mountain, Bike, Fence, Snowflake, Footprints, Landmark } from 'lucide-react';

const Location: React.FC = () => {
  const { t } = useTranslation();

  const activities = [
    { icon: <Bike size={24} />, title: t('location.biking'), distance: '10m' },
    { icon: <Mountain size={24} />, title: t('location.hiking'), distance: '500m' },
    { icon: <Footprints size={24} />, title: t('location.running'), distance: '2km' },
    { icon: <Fence size={24} />, title: t('location.horses'), distance: '4km' },
    { icon: <Landmark size={24} />, title: t('location.monuments'), distance: '5km' },
    { icon: <Snowflake size={24} />, title: t('location.skiing'), distance: '20km' },
  ];

  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('location.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('location.subtitle')}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-200 rounded-lg overflow-hidden h-80 mb-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.159850331732!2d16.028015341338893!3d50.88375175618831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470efd31df31ade3%3A0x57e744218361ba0d!2sStara%20Plebania!5e0!3m2!1spl!2spl!4v1740909926106!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }} 
              allowFullScreen={false}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Map"
              ></iframe>
            </div>
            <p className="text-gray-600">
              {t('location.description')}
            </p>
          </motion.div>
          
          {/* Activities and Distances */}
          <div>
            {/* Nearby Activities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold mb-4">{t('location.activities')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activities.map((activity, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                  >
                    <div className="text-indigo-600 mb-3">{activity.icon}</div>
                    <h4 className="font-semibold mb-1">{activity.title}</h4>
                    <p className="text-gray-500">{activity.distance}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
