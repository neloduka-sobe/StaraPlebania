import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Mountain, Bike, Waves, Clock, Bus, Plane } from 'lucide-react';

const Location: React.FC = () => {
  const { t } = useTranslation();

  const activities = [
    { icon: <Mountain size={24} />, title: t('location.hiking'), distance: '500m' },
    { icon: <Bike size={24} />, title: t('location.biking'), distance: '1km' },
    { icon: <Waves size={24} />, title: t('location.swimming'), distance: '2km' }
  ];

  const distances = [
    { icon: <MapPin size={24} />, title: t('location.cityCenter'), info: '3km' },
    { icon: <Bus size={24} />, title: t('location.publicTransport'), info: '100m' },
    { icon: <Plane size={24} />, title: t('location.airport'), info: '25km' }
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
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.2922926156744847!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1621543331496!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
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
            
            {/* Distances */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">{t('location.cityCenter')}</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                {distances.map((item, index) => (
                  <div key={index} className="flex items-center py-3 border-b last:border-b-0">
                    <div className="text-indigo-600 mr-4">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-500">{item.info}</p>
                    </div>
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