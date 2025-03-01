import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { languages } from '../i18n';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLanguages = () => setShowLanguages(!showLanguages);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLanguages(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#apartments', label: t('nav.apartments') },
    { href: '#location', label: t('nav.location') },
    { href: '#history', label: t('nav.history') },
    { href: '#contact', label: t('nav.contact') }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-indigo-600">Mountain View Hostel</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={toggleLanguages}
                className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Globe size={20} className="mr-1" />
                <span>{languages.find(lang => lang.code === i18n.language)?.flag}</span>
              </button>
              
              <AnimatePresence>
                {showLanguages && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50"
                  >
                    {languages.map((language: Language) => (
                      <button
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        <span className="mr-2">{language.flag}</span>
                        {language.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleLanguages}
              className="text-gray-700 hover:text-indigo-600 transition-colors mr-4"
            >
              <Globe size={20} />
            </button>
            <button onClick={toggleMenu} className="text-gray-700 hover:text-indigo-600 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile Language Selector */}
      <AnimatePresence>
        {showLanguages && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-2">
              {languages.map((language: Language) => (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600"
                >
                  <span className="mr-2">{language.flag}</span>
                  {language.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;