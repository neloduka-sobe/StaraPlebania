import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ApartmentCard from './ApartmentCard';
import { apartments } from '../data/apartments';

const Apartments: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="apartments" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('apartments.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('apartments.subtitle')}
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {apartments.map((apartment) => (
            <motion.div key={apartment.id} variants={itemVariants}>
              <ApartmentCard apartment={apartment} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Apartments;