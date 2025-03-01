import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Apartments from './components/Apartments';
import Location from './components/Location';
import History from './components/History';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set the html lang attribute when language changes
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Apartments />
      <Location />
      <History />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;