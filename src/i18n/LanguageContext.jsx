import React, { createContext, useState, useContext, useMemo } from 'react';
import { translations } from './translations';

// 1. Create the context
const LanguageContext = createContext();

// 2. Create the provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = useMemo(() => {
    return (key) => translations[language][key] || key;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Create the custom hook
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
