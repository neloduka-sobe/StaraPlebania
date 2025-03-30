import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const heroImagePath = '/assets/images/hero.webp';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload the hero image
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const img = new Image();
      img.src = heroImagePath;
      img.onload = () => setImageLoaded(true);
    }
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImagePath}
          alt={t('hero.imageAlt') || 'Luxury apartments'}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            {t('hero.subtitle')}
          </p>
          <motion.a
            href="#apartments"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta')}
          </motion.a>
        </div>
      </div>
      
      {imageLoaded && (
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5}}
        >
          <a href="#apartments" className="flex flex-col items-center">
            <span className="mb-2 text-sm">{t('hero.scroll')}</span>
            <ChevronDown size={24} />
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;