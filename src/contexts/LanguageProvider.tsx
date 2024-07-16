'use client';
import React, { createContext, useContext, useState } from 'react';

interface LanguageContextProps {
  language: 'en' | 'de';
  setLanguage: React.Dispatch<React.SetStateAction<'en' | 'de'>>;
}

const LanguageContext = createContext({
  language: 'de',
  setLanguage: (s: 'en' | 'de') => {
    s;
  },
});

const LanguageProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [language, setLanguage] = useState<'en' | 'de'>('de');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { LanguageProvider, useLanguage };
