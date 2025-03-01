import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const History: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="history" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('history.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('history.subtitle')}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* History Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-48 md:h-64">
                <img 
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Historical building exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 md:h-64">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Historical building interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden h-48 md:h-64">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Historical building detail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 md:h-64">
                <img 
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Historical building renovation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          {/* History Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="space-y-6">
              <p className="text-gray-600">
                {t('history.paragraph1')}
              </p>
              <p className="text-gray-600">
                {t('history.paragraph2')}
              </p>
              <p className="text-gray-600">
                {t('history.paragraph3')}
              </p>
              
              <div className="flex items-center">
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="px-4 text-gray-500 text-sm">? - 2025</span>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-indigo-600">? - 1946</div>
                  <div className="text-gray-500 text-sm">{t('history.period1')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">1946 - 2020</div>
                  <div className="text-gray-500 text-sm">{t('history.period2')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">2024</div>
                  <div className="text-gray-500 text-sm">{t('history.period3')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default History;