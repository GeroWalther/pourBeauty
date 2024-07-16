'use client';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <button onClick={toggleLanguage} className='mt-1'>
      <span>{language.toUpperCase()}</span>
      {/* {language === 'de' ? 'English' : 'Deutsch'} */}
    </button>
  );
}
