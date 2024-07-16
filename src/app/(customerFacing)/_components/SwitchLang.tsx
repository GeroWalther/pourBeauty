'use client';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <div>
      <p>{language.toUpperCase()}</p>
      <button onClick={toggleLanguage}>
        Switch to {language === 'de' ? 'English' : 'Deutsch'}
      </button>
    </div>
  );
}
