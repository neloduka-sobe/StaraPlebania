import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Mountain View Hostel</h3>
            <p className="text-gray-400 mb-4">
              Your perfect stay in the heart of nature.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-400">{t('footer.address')}</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <p className="text-gray-400">{t('footer.phone')}</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <p className="text-gray-400">{t('footer.email')}</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#apartments" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.apartments')}
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.location')}
                </a>
              </li>
              <li>
                <a href="#history" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.history')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Mountain View Hostel. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;