'use client';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function LanguageSwitcher({ mobile = false }) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`mt-1 font-medium ${
        mobile ? 'text-white' : 'text-stone-800 hover:text-amber-800'
      }`}>
      <span>{language.toUpperCase()}</span>
      {/* {language === 'de' ? 'English' : 'Deutsch'} */}
    </button>
  );
}
